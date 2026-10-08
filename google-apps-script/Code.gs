/**
 * Vulcan Racing website: form backend (Google Apps Script web app).
 *
 * Receives Contact and Recruitment submissions from the website, appends each one
 * as a row to a tab of the Google Sheet this script is attached to, and emails
 * contact messages to NOTIFY_EMAIL.
 *
 * SETUP (once, signed in as racingvulcan@gmail.com):
 *  1. Create a Google Sheet, e.g. "Vulcan Racing - Website Forms".
 *  2. In the sheet: Extensions -> Apps Script. Replace everything in Code.gs with this file. Save.
 *  3. Pick `selfTest` in the toolbar's function dropdown -> Run. The log should say "selfTest passed".
 *  4. Deploy -> New deployment -> gear icon -> Web app.
 *       Execute as: Me        Who has access: Anyone
 *     Authorize when asked. Google warns "unverified app" for your own scripts;
 *     Advanced -> Go to <project> (unsafe) is expected.
 *  5. Copy the Web app URL into FORMS_ENDPOINT in src/lib/submitForm.ts.
 *
 * UPDATING THIS SCRIPT: Deploy -> Manage deployments -> pencil -> Version: New version -> Deploy.
 * ("New deployment" creates a new URL and the website keeps calling the old one.)
 */

const NOTIFY_EMAIL = "racingvulcan@gmail.com";

// Keep `oneOf` lists in sync with the options in src/components/sections/RecruitmentSection.tsx
const FORMS = {
  contact: {
    sheet: "Contact",
    notify: true,
    fields: {
      name: { label: "Name", required: true, max: 100 },
      email: { label: "Email", required: true, max: 200, email: true },
      message: { label: "Message", required: true, max: 5000, multiline: true },
    },
  },
  recruitment: {
    sheet: "Applications",
    notify: false, // could be hundreds per drive; review them in the sheet instead
    fields: {
      name: { label: "Name", required: true, max: 100 },
      email: { label: "Email", required: true, max: 200, email: true },
      phone: { label: "Phone", max: 30 },
      year: { label: "Year", required: true, oneOf: ["1", "2", "3", "4"] },
      branch: { label: "Branch", required: true, max: 100 },
      department: {
        label: "Department",
        required: true,
        oneOf: ["Mechanical", "Aerodynamics", "Powertrain", "Electronics", "Business", "Operations"],
      },
      skills: { label: "Skills & Experience", max: 5000, multiline: true },
    },
  },
};

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: "Invalid request" });
  }

  // Honeypot: the website hides this field from people, so only bots fill it.
  // Pretend success so they don't retry.
  if (payload && payload.website) return reply({ ok: true });

  const result = validate(payload);
  if (result.error) return reply({ ok: false, error: result.error });

  const { form, data } = result;
  const keys = Object.keys(form.fields);
  const headers = ["Submitted"].concat(keys.map((k) => form.fields[k].label));
  getSheet(form.sheet, headers).appendRow([new Date()].concat(keys.map((k) => safeCell(data[k]))));

  if (form.notify) {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email,
      subject: "Website " + form.sheet.toLowerCase() + ": " + data.name,
      body:
        keys.map((k) => form.fields[k].label + ": " + data[k]).join("\n\n") +
        "\n\n- Sent from the Vulcan Racing website. Reply to this email to answer " + data.name + ".",
    });
  }

  return reply({ ok: true });
}

// Never trust the browser: re-check everything the website already checked.
function validate(payload) {
  const form = payload && FORMS.hasOwnProperty(payload.form) ? FORMS[payload.form] : null;
  if (!form) return { error: "Unknown form" };

  const data = {};
  for (const key of Object.keys(form.fields)) {
    const rule = form.fields[key];
    let value = String(payload[key] == null ? "" : payload[key]).trim();
    if (!rule.multiline) value = value.replace(/\s+/g, " "); // no line breaks in names/subjects
    if (rule.required && !value) return { error: rule.label + " is required" };
    if (value.length > (rule.max || 100)) return { error: rule.label + " is too long" };
    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { error: "Invalid email" };
    if (rule.oneOf && value && rule.oneOf.indexOf(value) === -1) return { error: "Invalid " + rule.label };
    data[key] = value;
  }
  return { form, data };
}

// A cell starting with = + - @ would run as a formula. The leading ' makes Sheets
// store it as plain text (and keeps "+91 ..." phone numbers intact).
function safeCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function getSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }
  return sheet;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function selfTest() {
  const ok = validate({ form: "contact", name: " Ada\nLovelace ", email: "ada@x.com", message: "Hi\nthere" });
  assert(ok.data && ok.data.name === "Ada Lovelace" && ok.data.message === "Hi\nthere", "flattens single-line fields only");
  assert(validate({ form: "contact", name: "A", email: "not-an-email", message: "m" }).error, "rejects bad email");
  assert(validate({ form: "contact", name: "A", email: "a@b.co", message: "" }).error, "rejects missing message");
  assert(validate({ form: "contact", name: "x".repeat(101), email: "a@b.co", message: "m" }).error, "rejects too-long name");
  assert(validate({ form: "toString" }).error && validate(null).error, "rejects unknown form");
  const app = { form: "recruitment", name: "A", email: "a@b.co", year: "2", branch: "ME", department: "Mechanical" };
  assert(validate(app).data, "accepts valid application");
  assert(validate(Object.assign({}, app, { year: "5" })).error, "rejects year outside 1-4");
  assert(validate(Object.assign({}, app, { department: "Hacking" })).error, "rejects unknown department");
  assert(safeCell("=IMPORTXML(1)") === "'=IMPORTXML(1)" && safeCell("+91 98") === "'+91 98" && safeCell("ok") === "ok", "neutralises formulas");
  Logger.log("selfTest passed");
}

function assert(condition, message) {
  if (!condition) throw new Error("selfTest FAILED: " + message);
}

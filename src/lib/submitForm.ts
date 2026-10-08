// Google Apps Script web app URL (setup steps: google-apps-script/Code.gs).
// Not a secret: the browser calls it directly, so it ships in the page bundle anyway.
const FORMS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxhMYxY8gGd87-0vMB08yG8fzAPbUXTKRfozVhFLPXdiq-dRdm4aqOoWIyypua2KBresQ/exec";

export async function submitForm(
  form: "contact" | "recruitment",
  data: Record<string, string>
) {
  if (!FORMS_ENDPOINT) throw new Error("FORMS_ENDPOINT is not set");
  // text/plain keeps this a "simple" CORS request: Apps Script can't answer a preflight
  const res = await fetch(FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ form, ...data }),
  });
  const json = await res.json().catch(() => null);
  if (!json?.ok) throw new Error(json?.error ?? `Submission failed (${res.status})`);
}

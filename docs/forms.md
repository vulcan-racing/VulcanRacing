# Contact and recruitment forms

How the two forms on the website work, where the submissions go, and how to change things without breaking them.

## How it works

```
Visitor's browser ──POST──> Google Apps Script web app ──> Google Sheet
  (src/lib/submitForm.ts)     (google-apps-script/Code.gs)    "Contact" tab       + email to racingvulcan@gmail.com
                                                              "Applications" tab  (no email)
```

There is no server of our own. The website sends each submission straight from the visitor's browser to a Google Apps Script that runs under the racingvulcan@gmail.com account. The script checks the data again (never trust the browser), adds a row to the Google Sheet it's attached to, and for contact messages sends an email to racingvulcan@gmail.com. Replying to that email goes straight to the person who wrote in.

Recruitment applications don't send an email, because a recruitment drive can bring in hundreds. Review them in the sheet.

## Where things live

| What | Where |
|---|---|
| The submissions | The Google Sheet in the racingvulcan@gmail.com Google Drive, tabs "Contact" and "Applications" |
| The live backend | Inside that sheet: Extensions > Apps Script |
| The backend's master copy | `google-apps-script/Code.gs` in this repo |
| The backend's URL | `FORMS_ENDPOINT` in `src/lib/submitForm.ts` |
| The form fields | `src/components/sections/ContactSection.tsx` and `RecruitmentSection.tsx` |

The URL is not a secret. Every visitor's browser calls it, so it's visible in the page code anyway. The script's own checks and the spam trap are what protect it.

The repo copy of `Code.gs` is the master. If you change the script, change it in the repo first, then paste it into the Apps Script editor, so the two never drift apart.

## Working with the sheet

Columns are written by position, in this order:

| Tab | Columns |
|---|---|
| Contact | Submitted, Name, Email, Message |
| Applications | Submitted, Name, Email, Phone, Year, Branch, Department, Skills & Experience |

Safe:
- Sorting and filtering. Filter views (Data > Filter views) are best, because they don't reorder the sheet for everyone else.
- Adding your own columns to the right of the last one, e.g. "Status" or "Interviewer". New rows leave them blank.
- Deleting rows, such as test entries or spam.

Breaks things:
- Inserting, deleting or moving columns inside the ranges above. New submissions keep writing to the original positions, so data lands under the wrong headings.
- Renaming the "Contact" or "Applications" tabs. The script looks them up by name, and if a tab is missing it creates a fresh empty one with that name.

## Privacy

Applications contain names, emails and phone numbers of students.

- Share the sheet only with the people who need it, by email address, as viewer or commenter. Never set it to "Anyone with the link".
- Once a recruitment round is over and decisions are made, delete or archive the applications rather than keeping them forever.
- Don't copy applicant details into public chats or group docs.

## Changing the forms

### Adding a field

Example: adding a required "USN" field to the recruitment form.

1. In `RecruitmentSection.tsx`, add `usn: ""` to `emptyForm` and add the input (copy an existing one, with matching `id` and `htmlFor`). Deploy the website.
2. In `google-apps-script/Code.gs`, add the field at the end of `FORMS.recruitment.fields`, using the same key: `usn: { label: "USN", required: true, max: 20 },`. Always add new fields at the end; adding one in the middle shifts every column after it.
3. In the sheet, type the new column header ("USN") into the first empty header cell of the tab yourself. The script only writes headers when it first creates a tab.
4. Update the live script (next section).

Do it in that order. The old script simply ignores a field it doesn't know, so the website can go first safely. If the script goes first with a new required field, it rejects every application until the website catches up.

If a new field isn't showing up in the sheet, step 2 or step 4 was missed: fields the script doesn't know about are dropped without an error.

### Changing the department list or years

The allowed values are checked in two places and must match: `deptOptions` in `RecruitmentSection.tsx` and the `oneOf` lists in `Code.gs`. If a department is on the website but not in the script, everyone who picks it gets "Submitting failed". When adding a department, update the script first; when removing one, update the website first.

### Changing who gets emailed

Edit `NOTIFY_EMAIL` in `Code.gs`. To also get an email for every application, set `notify: true` under `recruitment`. Then update the live script.

## Updating the live script

1. Make the change in `google-apps-script/Code.gs` in this repo and commit it.
2. Open the sheet > Extensions > Apps Script, replace everything in `Code.gs` with the new version, and save.
3. Choose `selfTest` in the function dropdown and click Run. The execution log should say "selfTest passed". If it fails, stop and fix it.
4. Deploy > Manage deployments > pencil icon > Version: "New version" > Deploy.

Use Manage deployments, not "New deployment". A new deployment gets a new URL, and the website would keep sending to the old version. If the URL ever does change, update `FORMS_ENDPOINT` in `src/lib/submitForm.ts` and redeploy the website.

## Testing

- `selfTest` (above) checks the validation rules without touching the sheet or sending email.
- For a full check, submit each form on the website with obviously fake details (e.g. name "TEST"), confirm the rows appear and the contact email arrives, then delete the test rows.

## Limits

- A free Gmail account can send about 100 emails a day from Apps Script. Past that, contact messages are still saved to the sheet, but the visitor sees "Sending failed" and may submit again, so you'll see duplicates.
- A submission takes a second or two; the button shows "Sending..." meanwhile.
- Spam: a hidden field that only bots fill in is used as a trap, and those submissions are dropped silently. If spam still gets through in large amounts, the next step is a CAPTCHA such as Cloudflare Turnstile, which needs a small change on both sides.

## Troubleshooting

Visitors see "Sending failed" / "Submitting failed":
1. Open the Apps Script editor > Executions (left sidebar). Failed runs are listed with the error.
2. Check Deploy > Manage deployments: the web app must still be "Execute as: Me" and "Who has access: Anyone".
3. Check that `FORMS_ENDPOINT` matches the deployment's Web app URL.
4. If the racingvulcan@gmail.com password was reset or the script's access was removed, Google may need re-authorising: run `selfTest` once in the editor and accept the prompt.

Contact emails aren't arriving:
- Look in the spam folder and in the "Contact" tab. If the row is there, the email part failed; check Executions for a quota error.

## Ownership and handover

The backend belongs to the racingvulcan@gmail.com Google account. Whoever controls that account controls the form data and the script. When the team hands over each year:

- Make sure the next leads can sign in to racingvulcan@gmail.com (and the `vulcan-racing` GitHub account).
- Share the sheet with the new leads and remove people who have left.
- Point them to this file.

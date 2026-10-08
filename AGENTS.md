<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Vulcan Racing website: project rules

Read `README.md` (layout, content map, known issues) and `docs/forms.md` (forms backend) before larger changes.

- Single-page App Router site. Content is plain arrays at the top of each file in `src/components/sections/`. Edit the data, not the layout, when asked to change text.
- Theme tokens live in `src/app/globals.css` `@theme`. `racing-red` is gold `#d4a836` and `neon-orange` is yellow `#ffcc00` (names kept from an old red theme). Use the tokens; never hardcode the old reds `rgba(230,0,18,…)` / `rgba(255,107,0,…)`.
- Never add a `z-index` to `<main>` in `src/app/page.tsx`: the modals inside it would render under the fixed nav. The particle canvas is `-z-10`.
- Fonts come from `next/font` in `layout.tsx`. `next/image` uses `preload` (`priority` is deprecated in Next 16).
- Forms: the browser POSTs `text/plain` JSON to a Google Apps Script (`src/lib/submitForm.ts` → `google-apps-script/Code.gs`). Field keys, `deptOptions` and the script's `oneOf` lists must stay in sync; new fields go at the end of `FORMS.*.fields` (columns are positional). Changing `Code.gs` requires the user to paste it into Apps Script and deploy a new version of the existing deployment; you cannot deploy it.
- Hosting: Vercel project `vulcan-racing`; pushes to `main` deploy to production via the Git integration. Keep `vercel.json` (`"framework": "nextjs"`): the project was created with the "Other" preset and serves a 404 without it.
- Run `npm run lint` and `npm run build` before calling a change done. After editing `Code.gs`, its `selfTest()` must still pass.

# Vulcan Racing website

The website of Vulcan Racing, the Formula Student team of DSATM, Bangalore. It's a single scrolling page: hero, about, cars, departments, competition journey, insights (blogs, newsletters, updates), gallery, achievements, team, sponsors, recruitment and contact.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and Framer Motion. The contact and recruitment forms save into a Google Sheet through a Google Apps Script (see [docs/forms.md](docs/forms.md)).

## Getting started

You need Node.js 22 or newer. Next.js 16 technically accepts 20.9+, but Node 20 stopped getting security updates in April 2026.

```bash
npm install
npm run dev      # http://localhost:3000, reloads as you edit
npm run lint     # ESLint
npm run build    # production build; run this before pushing
```

`npm run build` also type-checks. If it fails, fix it before you push.

## Project layout

```
src/
  app/
    layout.tsx        page <head>: title, description, social previews, icon, fonts
    page.tsx          the order of sections on the page
    globals.css       theme colours, fonts and shared classes (buttons, cards, ...)
  components/
    Navigation.tsx    top bar + mobile menu
    Footer.tsx
    LoadingScreen.tsx the RPM gauge shown while the page loads
    ParticleBackground.tsx
    AnimatedCounter.tsx
    sections/         one file per section of the page
  lib/
    submitForm.ts     sends form data to the Google Apps Script
google-apps-script/
  Code.gs             the forms backend (runs in Google; this is the master copy)
docs/
  forms.md            how the forms backend works and how to maintain it
public/               images, served from the site root ("/hero-car.png")
```

## Editing content

Almost all text lives in plain arrays at the top of each section file. Edit the array and the page updates; you rarely need to touch the layout code below it.

| To change | Edit | Look for |
|---|---|---|
| Hero slides (image, headline, tag) | `src/components/sections/HeroSection.tsx` | `slides` |
| About text, journey timeline, stat counters | `src/components/sections/AboutSection.tsx` | `timeline`, `stats` |
| Cars and their spec sheets | `src/components/sections/CarSection.tsx` | `carsList` |
| Departments | `src/components/sections/DepartmentsSection.tsx` | `departments` |
| Competition phases | `src/components/sections/CompetitionSection.tsx` | `milestones` |
| Blog posts, newsletters, updates | `src/components/sections/InsightsSection.tsx` | `blogs`, `newsletters`, `updates` |
| Gallery photos and filter tabs | `src/components/sections/GallerySection.tsx` | `galleryItems`, `categories` |
| Achievement counters and progress gauges | `src/components/sections/AchievementsSection.tsx` | `achievements`, the gauge array in the JSX |
| Team members | `src/components/sections/TeamSection.tsx` | `teamTiers`, `departments`, `deptColors` |
| Sponsors | `src/components/sections/SponsorsSection.tsx` | `sponsorTiers` |
| Recruitment steps and department choices | `src/components/sections/RecruitmentSection.tsx` | `recruitmentTimeline`, `deptOptions` |
| Address, email, social links, map | `src/components/sections/ContactSection.tsx` and `src/components/Footer.tsx` | |
| Menu links | `src/components/Navigation.tsx` and `src/components/Footer.tsx` | `navLinks`, `quickLinks` |
| Page title, description, social preview text | `src/app/layout.tsx` | `metadata` |

Some things are written in more than one place. When you change one, change the others too:

- Team size and other numbers appear in the hero slides, the About section stats and the About side cards.
- The menu links exist in both `Navigation.tsx` and `Footer.tsx`.
- The social links exist in both `ContactSection.tsx` and `Footer.tsx`.
- The recruitment department list exists in both `RecruitmentSection.tsx` and `google-apps-script/Code.gs`. If they differ, applications for the missing department get rejected. See [docs/forms.md](docs/forms.md).

### Blog posts

The `content` of a blog post supports a small subset of Markdown: lines starting with `### ` become subheadings, lines starting with `- ` become bullet points, and `**text**` becomes bold. Anything else (links, images, tables) shows up as plain text.

### Images

Put images in `public/` and refer to them by path, e.g. `src: "/my-photo.jpg"`. On hosts that run Next.js (Vercel, `npm start`) images get resized per device automatically; on plain static hosting they're sent as-is. Either way, keep the originals reasonable: JPG or WebP, under about 500 KB and around 2000 px wide. The current PNGs are 700 KB to 1 MB each and could be shrunk.

## Styling rules

- Colours are defined once in `src/app/globals.css` under `@theme` and used as Tailwind classes (`text-racing-red`, `bg-carbon`, ...). Don't hardcode hex or rgba values for brand colours.
- The colour names are left over from an earlier red theme. `racing-red` is now gold (`#d4a836`) and `neon-orange` is now yellow (`#ffcc00`). They're still the right classes for the brand accent; the names just weren't changed.
- Fonts are loaded with `next/font` in `layout.tsx` (Orbitron for headings via `font-racing`, Inter for body text). Don't add Google Fonts `<link>` tags.
- Reuse the shared classes in `globals.css` before writing new styles: `section-padding`, `container-racing`, `section-title`, `section-subtitle`, `glass-card`, `btn-primary`, `btn-secondary`, `form-input`.

## Things that are easy to break

- Don't put a `z-index` on `<main>` in `page.tsx`. The pop-ups (car specs, insights, gallery lightbox) are inside `<main>`, and a z-index there traps them underneath the fixed top bar.
- The particle background sits behind everything at `-z-10`. Sections with a solid background colour hide it, which is intended.
- Every section needs `<section id="...">`. The top bar highlights the menu link whose section is under the 30% line of the screen, and the menu buttons scroll to these ids. A new section needs its id added to `navLinks` and `quickLinks` if it should appear in the menu.
- In Next.js 16, `next/image` uses `preload`, not the old `priority` prop.
- This Next.js version differs from older tutorials. Check `node_modules/next/dist/docs/` when something doesn't behave the way a guide says.

## Git and GitHub

The code is at https://github.com/vulcan-racing/VulcanRacing on the `main` branch. To push, your own GitHub account needs write access: the owner of the `vulcan-racing` account adds you under Settings > Collaborators. A "403 permission denied" error means you haven't been added yet, or Git is signed in to a different GitHub account.

Run `npm run build` before you push. "LF will be replaced by CRLF" warnings on Windows are harmless.

## Deployment

The site isn't deployed yet. The options compared so far:

- Vercel (free Hobby plan) runs Next.js with no setup and optimises images. Hobby is for non-commercial use only. A student team site with recruitment and a sponsors section should qualify, but selling merchandise or running ads would need the paid plan.
- Cloudflare Pages allows commercial use for free. The simplest route there is a static export (`output: "export"` in `next.config.ts`, with `images: { unoptimized: true }`), which means compressing the photos by hand first.

The forms work with either, because the browser sends data straight to Google.

## Known issues and to-dos

- Placeholder content still to replace: team members (made-up names, LinkedIn links set to `#`), sponsors (made-up companies, plus software brands listed as partners), the newsletter button (shows a test popup), and gallery captions that don't match their photos.
- The team size is given as 60+ (hero), 50+ (About counters) and 80+ (About card). Pick one.
- The gallery says "VR-01"; the car is called VLR-01.
- The About timeline stops at 2024.
- Pop-ups don't close with the Escape key and don't stop the page behind them from scrolling.
- Unused leftovers that can be removed: the `three`, `@react-three/fiber`, `@react-three/drei` and `gsap` packages (unless someone plans a 3D car viewer), `src/components/SectionWrapper.tsx`, and the default `file.svg`, `globe.svg`, `next.svg`, `vercel.svg` and `window.svg` in `public/`.

## For AI coding assistants

Project rules for Claude, Codex and similar tools are in [AGENTS.md](AGENTS.md).

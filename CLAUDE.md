# Portfolio site: handoff notes

Personal engineering portfolio for **Mehmet Kara** (goes by Remus), a mechanical engineering student at The Ohio State University and Vehicle Dynamics Director for Formula Buckeyes, OSU's FSAE electric team. Audience: recruiters for design engineering roles in automotive and aerospace, plus friends.

Live at **https://remus4444.github.io/portfolio** (GitHub Pages, deploys from `main` / root on every push).

## Current scope: one project only

The site features **only the 600 V accumulator (battery pack) redesign** for the FB-26. The goal is to perfect this one page before adding others.

- Do **not** add, mention, or suggest other projects anywhere on the site unless Remus asks.
- Keep the About section and the hero focused on the accumulator.

## Known facts about the accumulator project

Use only these unless Remus provides more. Never invent numbers, specs, or outcomes.

- Took over the 600 V battery pack program for the 2026–27 season.
- Led its mechanical redesign; mechanical engineers were assigned to him and work was managed in Notion.
- Closed a design cycle that had been open for two years, in two months.
- He considers it his most impressive accomplishment.

Everything else on `projects/battery-pack.html` is a `[bracketed placeholder]` waiting for his content: the starting state of the program, key design decisions, team process, measurable results, lessons learned. When he gives notes, write them up in clear, confident, first-person prose and replace the placeholders.

## Structure

```
index.html                 Home: header (headshot, name, intro), project cards, Contact
projects/battery-pack.html Project page: facts row, hero image, 3D viewer, write-up
css/style.css              All styles and design tokens
js/main.js                 3D viewer fallback + footer year
assets/battery-pack/       Images (cover.jpg, etc.) and model.glb go here
README.md                  Deploy and editing instructions for Remus
```

Plain HTML/CSS/JS. No build step, no framework, no npm. Keep it that way so Remus can edit by hand.

## Design rules

- Based on https://www.vkhouri.dev: dark-only theme (near-black background, gray body text), no nav bar. A small header (round headshot, name, "Engineering Portfolio", intro) sits at the top of every page. Square-cornered project cards with a 2px border, a 200px photo, an underlined display-font title, a gray summary and a "Read more" button. Contact is icon tiles, with no form (GitHub Pages can't process one without a third-party service).
- Fonts: Inter (body), Saira 700 (display titles; free stand-in for the reference's Industry), JetBrains Mono (captions, placeholders), from Google Fonts.
- Accent: Ohio State scarlet, lightened to `#ff5a5a` for the dark background. Use sparingly.
- All colors are tokens on `:root` in `style.css`. Add new colors as tokens, never hard-coded.
- Layout: `.wrap` sets max width and side gutters with `padding-inline`. Don't override its horizontal padding with shorthand `padding` on elements that also have `.wrap` (that bug already happened once).
- Must work at phone width (~390px): no horizontal scroll, 24px side gutters.
- Headshot is an "MK" `.avatar` placeholder; swap in `assets/headshot.jpg` per the HTML comment.
- Image placeholders are `<div class="ph">path</div>`. Replace with `<img src="..." alt="...">` once real images exist. Always write meaningful alt text.

## 3D model

- Viewer uses Google's `<model-viewer>` (loaded from jsDelivr) and reads `../assets/battery-pack/model.glb`. If the file is missing, `main.js` shows a placeholder.
- Target under ~10 MB. Compress with: `npx @gltf-transform/cli optimize in.glb out.glb --compress draco`.
- No Git LFS: GitHub Pages doesn't serve LFS files.
- Anyone can download the GLB. Remus should confirm with Formula Buckeyes what geometry is OK to share; a simplified exterior is a good fallback.

## Workflow

- Remus edits on a Mac and a Linux Mint machine; Claude also edits from claude.ai and pushes to GitHub. Always `git pull` before editing.
- Preview locally with VS Code Live Server, or `python3 -m http.server 8000` (needed for the 3D viewer, which won't load over `file://`).
- Show changes as diffs and let Remus review before committing. Small, focused commits with plain-English messages.
- Before finishing visual changes, check both desktop and phone widths.

## Placeholders still to fill

- `assets/resume.pdf` (linked from the hero; not yet added).
- `assets/headshot.jpg`, plus the cover photo, hero photo, and `model.glb` for the battery pack.

## Don'ts

- Don't publish internship work or anything under NDA.
- Don't add analytics, trackers, or third-party scripts beyond Google Fonts and model-viewer without asking.
- Don't fabricate content, metrics, testimonials, or skills he hasn't stated.

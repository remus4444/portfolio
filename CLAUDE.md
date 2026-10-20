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
- Tools used: SolidWorks, Simulink, Altium. (Notion was used for task tracking but isn't listed as a tool.)
- Timeline: Aug 2026 to Nov 2026.
- Pack specs: 576 V (6 × 96 V subsegments; "600 V" is the class name used in titles), 9.1 kWh, 138s5p, Sony VTC6 (18650) cells, 72 kg, passive cooling.
- The redesign is essentially complete; describe it in the past tense.

Everything else on `projects/battery-pack.html` is a `[bracketed placeholder]` waiting for his content: the starting state of the program, key design decisions, team process, measurable results, lessons learned. When he gives notes, write them up in clear, confident, first-person prose and replace the placeholders.

## Structure

```
index.html                 Home: header (headshot, name, intro), project cards, Contact
projects/battery-pack.html Project page: facts row, hero image, 3D viewer, write-up
css/style.css              All styles and design tokens
js/main.js                 3D viewer fallback + footer year
assets/battery-pack/       Images (cover.jpg, etc.) and the .glb models
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

## 3D models

- Viewers use Google's `<model-viewer>` (loaded from jsDelivr). The project page has three: `accumulator.glb` (main viewer), `electronics-box.glb` and `contactor.glb` (figures under "What I did"). All are Draco-compressed SolidWorks exports. If a file is missing, `main.js` shows a placeholder.
- Models over a few MB use `data-src` plus a `.load-model` button, so they download only when clicked. `main.js` handles this.
- Target under ~10 MB and ~500K triangles. The accumulator (38 MB, ~12M triangles) and electronics box (8 MB, ~2.7M triangles) are still too heavy for phones; simplify with `npx @gltf-transform/cli optimize in.glb out.glb --compress meshopt --simplify true` (needs Node) or re-export from SolidWorks at coarser tessellation.
- No Git LFS: GitHub Pages doesn't serve LFS files.
- Anyone can download the GLB. Remus should confirm with Formula Buckeyes what geometry is OK to share; a simplified exterior is a good fallback.

## Workflow

- Remus edits on a Mac and a Linux Mint machine; Claude also edits from claude.ai and pushes to GitHub. Always `git pull` before editing.
- Preview locally with VS Code Live Server, or `python3 -m http.server 8000` (needed for the 3D viewer, which won't load over `file://`).
- Show changes as diffs and let Remus review before committing. Small, focused commits with plain-English messages.
- Before finishing visual changes, check both desktop and phone widths.

## Writing style

- Remus gives rough notes; turn them into polished, confident first-person prose and show him the result.
- Keep it neutral and non-blaming, especially about the pack's history (credit the earlier electrical work; state problems as facts).
- Plain and understated. He found the old hero tagline ("I design and build electric race car systems") cringeworthy; avoid slogans and hype.
- Keep his team's terms (e.g. "main containment case", "subsegments"), and don't expand them into generic jargon.

## Placeholders still to fill

- `assets/resume.pdf` (linked from the hero; not yet added).
- `assets/headshot.jpg`, plus the cover photo and hero photo for the battery pack; lighter versions of the accumulator and electronics box models.

## Open questions and next steps

Raised with Remus but not yet answered (as of 2026-10-20):

1. **"Two months" vs timeline.** The card and page say the design cycle closed "in two months", but the facts row says Aug–Nov 2026 (about three). Either clarify what the two months covers or change the claim.
2. **600 V vs 576 V.** The title, subtitle and home card say "600 V"; the specs table says 576 V (6 × 96 V, fully charged). Currently treating 600 V as the class name; confirm or switch to 576 V.
3. **Result section** still needs measurable outcomes (mass, cost, part count, schedule).
4. **"What I'd do differently"** still needs one or two honest lessons.
5. **Model weight.** Accumulator (~40 MB, ~12M triangles, 23 translucent parts) and electronics box (~8 MB, ~2.7M triangles) are too heavy for phones. Next step is simplifying them, by re-exporting from SolidWorks at coarser tessellation or running gltf-transform (needs Node). Also check the accumulator for flickering translucent parts.
6. **Z-up orientation** on the electronics box and contactor (`orientation="0deg -90deg 0deg"`) hasn't been visually confirmed; flip to `90deg` if they appear upside down.
7. **Sharing approval.** Remus should confirm with Formula Buckeyes that the published models are OK to share.

## Don'ts

- Don't publish internship work or anything under NDA.
- Don't add analytics, trackers, or third-party scripts beyond Google Fonts and model-viewer without asking.
- Don't fabricate content, metrics, testimonials, or skills he hasn't stated.

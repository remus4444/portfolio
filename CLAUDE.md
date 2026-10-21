# Portfolio site: handoff notes

Personal engineering portfolio for **Mehmet Kara** (goes by Remus), a mechanical engineering student at The Ohio State University and Vehicle Dynamics Director for Formula Buckeyes, OSU's FSAE electric team. Audience: recruiters for design engineering roles in automotive and aerospace, plus friends.

Live at **https://remus4444.github.io/portfolio** (GitHub Pages, deploys from `main` / root on every push).

## Current scope

Four projects, in this order on the home page:

1. **FB26 600 V Battery Pack** (the accumulator redesign) (`projects/battery-pack.html`): the most complete page.
2. **Driver-in-the-Loop Simulator** (`projects/driver-in-the-loop-simulator.html`). Known so far: one of the first FSAE driver-in-the-loop simulators in the USA; a high-fidelity, real-time vehicle simulation used for driver training and system development, year-round and at low cost.
3. **FSAE Battery Testing and Simulation** (`projects/battery-testing-model.html`). Known so far: the team's first battery testing and simulation program; industry-grade equipment and test procedures; predictive cell models in Simulink; guides cell selection and pack design for future years.
4. **FB26 Suspension Design** (`projects/fb26-suspension.html`). Page written 2026-10-21 from Remus's notes, except the gallery (photos to come). Facts: design Jul–Aug 2025; SolidWorks + Excel design table, Lotus Shark kinematics, CarSim handling, ANSYS Static Structural for the anti-roll bar; double wishbone pushrod, 1530 mm wheelbase, 1200 mm track front and rear; constraints were the front chassis half (front inboard hardpoints fixed), wheels and all four uprights. Wheels are three-piece: in-house carbon fiber rims with aluminum centers. FB25's suspension was adapted from FB24 (carbon monocoque front, tube frame rear): top-plane rear damper mounts, anti-roll bar inside the chassis, wheelbase shortened 1585 to 1530 mm without simulation. Fix: single-shear pivot posts on a chassis-side chamfer (more rigid, front parts reused at the rear) and the anti-roll bar moved to the rear of the chassis (35% rear roll stiffness target, within 0.5%, lighter). Results: earliest suspension handoff in team history (before fall semester), 75% faster iteration, neutral, predictable handling. Lesson: involve newer members instead of designing alone.

Projects 2–3 are empty shells (added 2026-10-20) that use the battery pack page's section layout, with every section a `[bracketed placeholder]`. Remus hasn't given any facts about them yet, so don't fill them in until he does. Don't add or suggest further projects unless he asks.

## Known facts about the accumulator project

Use only these unless Remus provides more. Never invent numbers, specs, or outcomes.

- Took over the 576 V battery pack program for the 2026–27 season.
- Led its mechanical redesign; mechanical engineers were assigned to him and work was managed in Notion.
- Closed a design cycle that had been open for two years, in three months (Aug–Nov 2026).
- He considers it his most impressive accomplishment.
- Tools used: SolidWorks, Simulink, Altium. (Notion was used for task tracking but isn't listed as a tool.)
- Timeline: Aug 2026 to Nov 2026.
- Pack specs: 576 V (6 × 96 V subsegments), 9.1 kWh, 138s5p, Sony VTC6 (18650) cells, 69 kg, passive cooling. Project titles (page title, h1, home card heading) say "600 V" because it's more eye-catching and close to correct; everywhere else (specs, body text, card summary) says 576 V.
- It is the team's first functioning pack, and that is the main accomplishment. Its metrics are modest because the cells and module layout were inherited and out of scope. Frame results that way, not as impressive numbers.
- The electronics box consolidated the electronics in the top-box into one main housing, shrinking the PCB footprint by a factor of three. The freed top-box space went to larger, rules-compliant maintenance plugs (no before/after footprint numbers; Remus chose not to add them). It holds five boards: precharge discharge board, precharge discharge daughter board (relays that switch the contactors), high voltage detection board (alerts other subsystems, e.g. the safety board), high voltage indicator board (LED visible on the lid) and insulation measurement device (shuts the pack down on an insulation fault). Much of the e-box effort was coordinating with the electronics subteam on connector vertical clearance (install and wire bend) and efficient wire routing. Remus wrote a 20-page build guide so any member could assemble it.
- Lessons: keep design reviews on the schedule (an extra hour per subassembly would have avoided an unnecessary revision); prototype test-fit parts in PLA before printing in PC-FR (expensive, scarce).
- The contactor assembly is no longer showcased. Don't add it back.
- **The internal resistance table and the thermal chart (autocross current profile) use FAKE placeholder numbers**, marked "Placeholder data" on the page. Replace them with Remus's real test data, and don't treat them as facts.
- The redesign is essentially complete; describe it in the past tense.

Everything else on `projects/battery-pack.html` is a `[bracketed placeholder]` waiting for his content (e.g. the IR test method). When he gives notes, write them up in clear, confident, first-person prose and replace the placeholders.

## Structure

```
index.html                 Home: top bar, hero, project cards, Contact
projects/*.html            One page per project (see Current scope); the three newer ones are placeholder shells
projects/battery-pack.html Project page: facts row, then 3D model, Specs, The problem, What I did, Subsystem showcases (Electronics box), Gallery, Results, What I'd do differently
css/style.css              All styles and design tokens
js/main.js                 3D viewer fallback, gallery lightbox, chart hover, footer year
assets/<project>/          Images (cover.jpg, etc.) and .glb models, one folder per project
README.md                  Deploy and editing instructions for Remus
```

Plain HTML/CSS/JS. No build step, no framework, no npm. Keep it that way so Remus can edit by hand.

## Design rules

- Dark-only theme (near-black background, gray body text). Originally modeled on https://www.vkhouri.dev, but the home page was redesigned on 2026-10-20 because it looked like a copy of that site. Don't drift back toward it: no round avatar plus name block, no icon-tile contact, no underlined card titles or "Read more" buttons.
- Every page has a slim top bar: "Home" (display font) on the left, Projects / Résumé / Contact links on the right. Don't put his name in the bar; the hero already shows it.
- Home: hero with a very large display-font name, the intro, Download résumé and Email me buttons, and a facts row (Studying, Based in only). No eyebrow line above the name. Then project cards in a two-column grid: bordered panels (16:10 photo, title, summary, underlined "View project →") that lift on hover so they read as clickable. No numbers or category tags. Then Contact as labelled rows (Email, LinkedIn, GitHub, Résumé). No form, because GitHub Pages can't process one without a third-party service.
- Fonts: Inter (body), Saira 700 (display titles; free stand-in for the reference's Industry), JetBrains Mono (captions, placeholders), from Google Fonts.
- Accent: Ohio State scarlet, lightened to `#ff5a5a` for the dark background. Use sparingly.
- All colors are tokens on `:root` in `style.css`. Add new colors as tokens, never hard-coded.
- Layout: `.wrap` sets max width and side gutters with `padding-inline`. Don't override its horizontal padding with shorthand `padding` on elements that also have `.wrap` (that bug already happened once).
- Must work at phone width (~390px): no horizontal scroll, 24px side gutters.
- Gallery photos are `<a href data-caption>` around an `<img>`; `main.js` opens them in a `<dialog class="lightbox">` with the caption. Save photos as JPEG (~200 KB, metadata stripped).
- Image placeholders are `<div class="ph">path</div>`. Replace with `<img src="..." alt="...">` once real images exist. Always write meaningful alt text.

## 3D models

- Viewer look: `environment-image="legacy"`, `tone-mapping="aces"`, `shadow-intensity="1"`, `shadow-softness="0.5"`, `exposure="1.1"`, chosen to give assemblies more contrast. `main.js` also caps translucent (BLEND) materials at 25% opacity so enclosures don't hide the parts inside.
- Viewers use Google's `<model-viewer>` (loaded from jsDelivr). The battery pack page has two: `accumulator.glb` (main viewer) and `electronics-box.glb` (under "Subsystem showcases"). The suspension page has `assets/fb26-suspension/suspension.glb` (12 MB, ~2.9M triangles, Z-up corrected with `orientation="0deg -90deg 0deg"`, starting view `camera-orbit="60deg 65deg auto"` so all four corners show). All are Draco-compressed SolidWorks exports. If a file is missing, `main.js` shows a placeholder.
- Models over a few MB use `data-src` plus a `.load-model` button, so they download only when clicked. `main.js` handles this.
- Target under ~10 MB and ~500K triangles. The accumulator (38 MB, ~12M triangles) and electronics box (8 MB, ~2.7M triangles) are still too heavy for phones; simplify with `npx @gltf-transform/cli optimize in.glb out.glb --compress meshopt --simplify true` (needs Node) or re-export from SolidWorks at coarser tessellation.
- No Git LFS: GitHub Pages doesn't serve LFS files.
- Formula Buckeyes approved sharing the published models (Oct 2026).

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

## Résumé

`assets/resume.pdf` is Remus's résumé (added 2026-10-20, includes his phone number; he approved publishing it). Replace the file when he sends a new version. Its bullets are a source of facts he has stated, e.g. suspension iteration time cut 75% via a parametric CAD + kinematic solver pipeline; battery models validated to under 3% average residual; DiL simulator built at OSU's Center for Automotive Research with 98% correlation in lateral acceleration and yaw rate. Don't use the Tesla internship content on the site (see Don'ts).

## Placeholders still to fill

- Cover photos for the three newer projects; lighter versions of the accumulator and electronics box models.

## Open questions and next steps

Not yet resolved (as of 2026-10-20):

1. **Replace placeholder test data.** The internal resistance and thermal numbers are fake. The thermal chart is a static SVG built from a 41-point series; the same data is in the `.chart-data` JSON (for hover) and the data table. Update all three, and `main.js` if the axis ranges change.
2. **Model weight.** Accumulator (~40 MB, ~12M triangles, 23 translucent parts) and electronics box (~8 MB, ~2.7M triangles) are too heavy for phones. Remus chose to skip this for now. Also check the accumulator for flickering translucent parts.

## Don'ts

- Don't publish internship work or anything under NDA.
- Don't add analytics, trackers, or third-party scripts beyond Google Fonts and model-viewer without asking.
- Don't fabricate content, metrics, testimonials, or skills he hasn't stated.

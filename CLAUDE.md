# Portfolio site: handoff notes

Personal engineering portfolio for **Mehmet Kara** (goes by Remus), a mechanical engineering student at The Ohio State University and Vehicle Dynamics Director for Formula Buckeyes, OSU's FSAE electric team. Audience: recruiters for design engineering roles (kept open-ended, not tied to an industry), plus friends.

Live at **https://remus4444.github.io/portfolio** (GitHub Pages, deploys from `main` / root on every push).

## Current scope

Five projects, in this order on the home page (reordered 2026-10-25 at Remus's request):

1. **FB26 600 V Battery Pack** (the accumulator redesign) (`projects/battery-pack.html`): the most complete page.
2. **Tesla Semi Manufacturing Internship** (`projects/tesla-semi.html`), added 2026-10-20 at Remus's request. Facts so far come only from his published résumé: Semi Manufacturing Engineering Intern, Sparks, NV, May–Aug 2026; reverse engineered proprietary tools in CATIA V5 from laser scan and CMM data (saved thousands in contracting costs); built a scaled-down 6-axis Fanuc robot cell to train technicians; cut fifth wheel mounting station cycle time 15% with a custom pneumatic quick connector (gasket sealing optimized via design tables and SLA printing, $5 in-house unit cost). On the page, the fifth wheel bullet was generalized at Remus's request to "improved station cycle times" with in-house tooling made on Formlabs printers (no 15% or $5). Page style follows https://thanhvtran.com/portfolio/apple-internship/: NDA notice at the top ("public knowledge or approved for disclosure by my manager"), short general description, bullet list of work, skills chips, public images only, no lessons section. Keep it brief and non-specific.
3. **FB26 Suspension Design** (`projects/fb26-suspension.html`). Page written 2026-10-21 from Remus's notes. Gallery has two images: the SolidWorks render (also the card cover) and a wireframe kinematic model screenshot; no third slot. Facts: design Jul–Aug 2025; SolidWorks + Excel design table, Lotus Shark kinematics, CarSim handling, ANSYS Static Structural for the anti-roll bar; double wishbone pushrod, 1530 mm wheelbase, 1200 mm track front and rear; constraints were the front chassis half (front inboard hardpoints fixed), wheels and all four uprights. Wheels are three-piece: in-house carbon fiber rims with aluminum centers. FB25's suspension was adapted from FB24 (carbon monocoque front, tube frame rear): top-plane rear damper mounts, anti-roll bar inside the chassis, wheelbase shortened 1585 to 1530 mm without simulation. Fix: single-shear pivot posts on a chassis-side chamfer (more rigid, front parts reused at the rear) and the anti-roll bar moved to the rear of the chassis (35% rear roll stiffness target, within 0.5%, lighter). Results: earliest suspension handoff in team history (before fall semester), 75% faster iteration, neutral, predictable handling. Lesson: involve newer members instead of designing alone.
4. **Driver-in-the-Loop Simulator** (`projects/driver-in-the-loop-simulator.html`). Known so far: one of the first FSAE driver-in-the-loop simulators in the USA; a high-fidelity, real-time vehicle simulation used for driver training and system development, year-round and at low cost. Built by Remus at OSU's Center for Automotive Research (CAR) for CAR's student project teams; primarily used by Formula Buckeyes. It was handed off to Ford Performance as a basis for their CarSim DiL efforts; Remus approved stating this publicly, and the page says so at the end of Results. Use his wording ("Ford Performance", "CarSim DiL efforts"); don't mention the LMDh hypercar. Started Oct 2024 (before his CAR research assistant role, May–Aug 2025) and still ongoing: core functionality is done; fidelity and quality-of-life features are still being added. Software: Simulink and CarSim. Hardware includes a custom steering wheel and peripherals. Architecture: an offline physics PC (never connected to the internet, stripped to only what the sim needs) runs the simulation and streams data over UDP through a network card to an internet-connected data PC running analysis software such as MoTeC i2 Pro. DiL log files are converted automatically to MoTeC i2 format, the same as the real car's. Rig: Simucube 2 Pro direct-drive wheel base (up to 21 Nm, matching the car's steering torque), Heusinkveld Pro pedals (matched to the car's maximum braking forces), custom steering wheel, static (no motion). 1 kHz simulation rate. Remus built it essentially solo; a team member designed the custom steering wheel PCB (USB, same layout and buttons as the real FSAE wheel). Remus chose not to list the 98% correlation, display setup or data output in the specs table. The page's Correlation section has a lateral acceleration chart (skidpad direction change, 10-14 s, DiL CarSim output vs MoTeC track data from TRC). Its values were traced pixel-by-pixel from Remus's MATLAB plot screenshot, not exported raw data; a note inside "Show data table" says so (Remus removed the caption). Replace with the raw logs if he provides them.
5. **FSAE Battery Testing and Simulation** (`projects/battery-testing-model.html`). Page written 2026-10-25 from Remus's notes; no 3D model or Subsystem showcases sections. Gallery: cycler setup (Sony VTC6 cell on an Arbin), FLIR image of a 1s5p module at its thermal limits on an endurance profile, insulated cell (approximately adiabatic, for fitting heat generation). The Validation section's chart (cell temperature vs SoC over a full discharge, Simulink vs test) was traced from Remus's MATLAB screenshot at 10% SoC steps, not exported data; a note in "Show data table" says so. Replace with raw data if he provides it. Test conditions (cell, current) not yet stated. Facts: Remus came up with the program and did all the work for its first 5 months (standard test procedures, models, MATLAB scripts), then trained other leads and members; Jul 2025 to present; MATLAB and Simulink. Before it, cells were picked from datasheets and napkin math, with no cell testing, cell models or way to analyze cooling; the FB26 pack paired high-resistance cells with passive cooling and needed a big powertrain derate. HPPC tests on the FB26 pack's Enepaq VTC6 1s5p modules (Remus wrote "Enapaq"; check) and future cell candidates; capacity and current profile tests (e.g. endurance); Arbin testers, thermocouples, thermal cameras; data post-processed in MATLAB, cell models in Simulink scaled to pack level. 300+ hours of testing on 9 module/cell types (tabbed and tabless, 18650 and 21700), plus segment and full pack tests. Results: mechanical engineers now far more involved in cell selection, packaging, layout and cooling; the early-season FB26 pack model showed the pack needed active cooling to be competitive, which its design couldn't accommodate, leading to a 2028 battery redesign; 8 candidate cells HPPC-tested across loads, SOC and temperature, showing a gain larger than any other area of the car. Lesson: break the system into parts first (the module-to-module bus bars he'd dismissed were what threw off his early FB26 pack model).

Project 4 (DiL) is being written up section by section with Remus (facts row, subtitle, specs, video, The problem, What I did and Correlation done as of 2026-10-23; no Subsystem showcases section (Remus removed it); Results done (suspension geometry, FB26/FB27 controls incl. yaw-rate P-controller torque vectoring tuned in the DiL, FB28 pack cell/layout studies over endurance runs, 200+ driver hours from 2 drivers in a year); lessons done (multibody Simulink detour cost ~6 months); Gallery has two photos (overhead and side views of the rig) and will stay at two for now (Remus removed the third slot); the side photo is also the home card image). Don't add or suggest further projects unless he asks.

## Known facts about the accumulator project

Use only these unless Remus provides more. Never invent numbers, specs, or outcomes.

- Took over the 576 V battery pack program for the 2026–27 season.
- Led its mechanical redesign; mechanical engineers were assigned to him and work was managed in Notion.
- Closed a design cycle that had been open for two years, in three months (Aug–Nov 2026).
- He considers it his most impressive accomplishment.
- Tools used: SolidWorks, Simulink, Altium. (Notion was used for task tracking but isn't listed as a tool.)
- Timeline: Aug 2026 to Nov 2026.
- Pack specs: 576 V (6 × 96 V subsegments), 9.1 kWh, 138s5p, Sony VTC6 (18650) cells, 69 kg, passive cooling. Project titles (page title, h1), the project page subtitle and the home card (heading and summary) say "600 V" because it's more eye-catching, close to correct and avoids confusing visitors; the specs table (and model alt text) say 576 V.
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
projects/*.html            One page per project (see Current scope)
projects/battery-pack.html Project page: facts row, then 3D model, Specs, The problem, What I did, Subsystem showcases (Electronics box), Gallery, Results, What I'd do differently
css/style.css              All styles and design tokens
js/main.js                 3D viewer fallback, gallery lightbox, chart hover (axes, units and series come from each chart's .chart-data JSON), footer year
assets/<project>/          Images (cover.jpg, etc.) and .glb models, one folder per project
README.md                  Deploy and editing instructions for Remus
```

Plain HTML/CSS/JS. No build step, no framework, no npm. Keep it that way so Remus can edit by hand.

## Design rules

- Dark-only theme (near-black background, gray body text). Originally modeled on https://www.vkhouri.dev, but the home page was redesigned on 2026-10-20 because it looked like a copy of that site. Don't drift back toward it: no round avatar plus name block, no icon-tile contact, no underlined card titles or "Read more" buttons.
- Every page has a slim top bar with Home / Projects / Résumé / Contact links, all right-aligned and styled alike. Don't put his name in the bar; the hero already shows it.
- Home: hero with a very large display-font name, the intro, a Download résumé button (no Email me button; email lives in Contact), and a facts row (Studying, Based in only). No eyebrow line above the name. Then project cards in a two-column grid: bordered panels (16:10 photo, title, summary, underlined "View project →") that lift on hover so they read as clickable. No numbers or category tags. Then Contact as labelled rows (Email, LinkedIn, GitHub, Résumé). No form, because GitHub Pages can't process one without a third-party service.
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
- All models load automatically with `src` (Remus asked for no click-to-load buttons, 2026-10-23). `main.js` still supports `data-src` plus a `.load-model` button if that's ever wanted again.
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
- Avoid constructions that read as AI-generated, such as a colon introducing an explanation ("X: a Y that…"); prefer two plain sentences.
- Plain and understated. He found the old hero tagline ("I design and build electric race car systems") cringeworthy; avoid slogans and hype.
- Keep his team's terms (e.g. "main containment case", "subsegments"), and don't expand them into generic jargon.

## Résumé

`assets/resume.pdf` is Remus's résumé (added 2026-10-20, includes his phone number; he approved publishing it). Replace the file when he sends a new version. Its bullets are a source of facts he has stated, e.g. suspension iteration time cut 75% via a parametric CAD + kinematic solver pipeline; battery models validated to under 3% average residual; DiL simulator built at OSU's Center for Automotive Research with 98% correlation in lateral acceleration and yaw rate. The Tesla internship now has its own page (see Current scope); keep it to résumé-level detail unless Remus confirms more is cleared.

## Placeholders still to fill

- Lighter versions of the accumulator and electronics box models.

## Open questions and next steps

Not yet resolved (as of 2026-10-20):

1. **Replace placeholder test data.** The internal resistance and thermal numbers are fake. Both sections are currently hidden from visitors (wrapped in `<div hidden>` on the battery pack page, 2026-10-26) until Remus gets the real data; unhide them when the data goes in. The thermal chart is a static SVG built from a 41-point series; the same data is in the `.chart-data` JSON (for hover) and the data table. Update all three, including the `xRange`/`yRange` in the JSON if the axis ranges change.
2. **Model weight.** Accumulator (~40 MB, ~12M triangles, 23 translucent parts) and electronics box (~8 MB, ~2.7M triangles) are too heavy for phones. Remus chose to skip this for now. Also check the accumulator for flickering translucent parts.

## Don'ts

- Don't publish anything under NDA. The Tesla page is allowed, but only with information Remus confirms is public or cleared by Tesla: no internal numbers, drawings, CAD or photos without approval. When he adds Tesla detail, remind him to check.
- Don't add analytics, trackers, or third-party scripts beyond Google Fonts and model-viewer without asking. YouTube embeds are allowed when Remus asks for a video; use `youtube-nocookie.com` and the `.video` wrapper (the Tesla page has two: the Core Memory factory tour from the start and Formlabs' Fuse X1 video; the DiL page has Remus's own "fb26firstrun" video above Specs).
- Don't fabricate content, metrics, testimonials, or skills he hasn't stated.

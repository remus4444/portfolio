# Engineering Portfolio

Plain HTML/CSS site, hosted free on GitHub Pages.

## Put it online (about 5 minutes)

1. Create a GitHub account, then a **new public repository** named exactly `YOUR-USERNAME.github.io`.
2. Upload everything in this folder (drag and drop on the repo page, or use GitHub Desktop).
3. In the repo, go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io`.

Every time you push a change, the site updates automatically.

## Fill in your content

- **Placeholders:** search the project pages for `[` to find every bracketed note to replace with your own writing.
- **Photos:** each project has a folder in `assets/`. Add a `cover.jpg` and swap the `<div class="ph">…</div>` placeholder for `<img src="../assets/…/cover.jpg" alt="…">` (on the home page the path is `assets/…`).
- **Links:** replace `you@example.com`, `YOUR-HANDLE` and `YOUR-USERNAME` in `index.html`, and add `assets/resume.pdf`.

## Add a 3D model

1. Export the assembly from your CAD program as **glTF/GLB**. SolidWorks and Fusion can do this directly or via a plugin; otherwise export STEP or STL and convert it in Blender (File → Export → glTF 2.0, choose `.glb`).
2. Keep it under about 10 MB: suppress fasteners and internal parts, and decimate meshes in Blender if needed.
3. Save it as `assets/<project>/model.glb`. The viewer on that project page picks it up automatically; until then it shows a placeholder.

To add a viewer to a page that doesn't have one, copy the `<div class="viewer">` block and the `model-viewer` `<script>` line from `projects/battery-pack.html`.

## Add a project

1. Copy any file in `projects/` and rename it.
2. Edit the title, facts and body.
3. Add a new `<a class="card">` block to the grid in `index.html`.

## Before publishing

Check that the pack design details are OK for Formula Buckeyes to share publicly.

// Shows a placeholder when a 3D model file hasn't been added yet.
document.querySelectorAll('.viewer').forEach((box) => {
  const mv = box.querySelector('model-viewer');
  if (!mv) return;
  const src = mv.getAttribute('src') || mv.dataset.src;
  if (!src) { box.classList.add('no-model'); return; }
  fetch(src, { method: 'HEAD' })
    .then((r) => { if (!r.ok) box.classList.add('no-model'); })
    .catch(() => box.classList.add('no-model'));
  mv.addEventListener('error', () => box.classList.add('no-model'));

  // Large models use data-src and only download when the button is clicked.
  const btn = box.querySelector('.load-model');
  if (btn) btn.addEventListener('click', () => { mv.src = mv.dataset.src; btn.remove(); });

  // SolidWorks exports enclosures as fairly opaque tinted plastic, which hides
  // the parts inside. Make translucent parts more see-through.
  mv.addEventListener('load', () => {
    for (const m of mv.model.materials) {
      if (m.getAlphaMode() !== 'BLEND') continue;
      const c = m.pbrMetallicRoughness.baseColorFactor;
      m.pbrMetallicRoughness.setBaseColorFactor([c[0], c[1], c[2], Math.min(c[3], 0.25)]);
    }
  });
});

// Line chart hover: crosshair, dots and tooltip at the nearest data point.
// Each chart's .chart-data JSON holds its series, axis ranges and units, plus
// the plot area used to draw the SVG (defaults: x 56-664, y 24-316 in 720 wide).
document.querySelectorAll('.chart').forEach((chart) => {
  const data = JSON.parse(chart.closest('figure').querySelector('.chart-data').textContent);
  const svg = chart.querySelector('svg');
  const tip = chart.querySelector('.chart-tip');
  const cross = svg.querySelector('.cross');
  const [x0, x1] = data.xRange;
  const [y0, y1] = data.yRange;
  const { left, top, width, height, viewWidth } = { left: 56, top: 24, width: 608, height: 292, viewWidth: 720, ...data.plot };
  const x = (t) => left + width * (t - x0) / (x1 - x0);
  const y = (v) => top + height - height * (v - y0) / (y1 - y0);
  const dots = data.series.map((s, k) => svg.querySelector(`.dot.s${k + 1}`));
  const marks = [cross, ...dots, tip];
  const show = (on) => { marks.forEach((el) => { el.toggleAttribute('hidden', !on); }); };
  svg.addEventListener('pointermove', (e) => {
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse());
    const t = x0 + (p.x - left) / width * (x1 - x0);
    let i = 0;
    data.t.forEach((v, k) => { if (Math.abs(v - t) < Math.abs(data.t[i] - t)) i = k; });
    const px = x(data.t[i]);
    cross.setAttribute('x1', px); cross.setAttribute('x2', px);
    data.series.forEach((s, k) => { dots[k].setAttribute('cx', px); dots[k].setAttribute('cy', y(data[s.key][i])); });
    tip.innerHTML = `<b>${data.t[i]} ${data.xUnit}</b>` + data.series.map((s) => `${s.label} ${data[s.key][i]} ${data.yUnit}`).join('<br>');
    show(true);
    const scale = svg.getBoundingClientRect().width / viewWidth;
    const left = px * scale;
    tip.style.left = (left > svg.clientWidth / 2 ? left - tip.offsetWidth - 12 : left + 12) + 'px';
  });
  svg.addEventListener('pointerleave', () => show(false));
});

// Gallery: clicking a photo opens it larger with its caption.
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const img = lightbox.querySelector('img');
  const cap = lightbox.querySelector('figcaption');
  document.querySelectorAll('.gallery a').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      img.src = a.href;
      img.alt = a.querySelector('img').alt;
      cap.textContent = a.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.close').addEventListener('click', () => lightbox.close());
  // Clicking the dark backdrop also closes it.
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });
}

// Keeps the footer year current.
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

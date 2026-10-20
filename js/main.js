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
document.querySelectorAll('.chart').forEach((chart) => {
  const data = JSON.parse(chart.closest('figure').querySelector('.chart-data').textContent);
  const svg = chart.querySelector('svg');
  const tip = chart.querySelector('.chart-tip');
  const cross = svg.querySelector('.cross');
  const dots = { max: svg.querySelector('.dot.s1'), avg: svg.querySelector('.dot.s2') };
  // Must match the plot area used to draw the SVG.
  const x = (t) => 56 + 608 * t / 20;
  const y = (v) => 316 - 292 * (v - 20) / 45;
  const hide = () => { [cross, dots.max, dots.avg, tip].forEach((el) => { el.toggleAttribute('hidden', true); }); };
  svg.addEventListener('pointermove', (e) => {
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse());
    const i = Math.max(0, Math.min(data.t.length - 1, Math.round((p.x - 56) / 608 * 20 / 0.5)));
    const px = x(data.t[i]);
    cross.setAttribute('x1', px); cross.setAttribute('x2', px);
    for (const k of ['max', 'avg']) { dots[k].setAttribute('cx', px); dots[k].setAttribute('cy', y(data[k][i])); }
    tip.innerHTML = `<b>${data.t[i]} min</b>Max ${data.max[i]} °C<br>Avg ${data.avg[i]} °C`;
    [cross, dots.max, dots.avg, tip].forEach((el) => { el.toggleAttribute('hidden', false); });
    const scale = svg.getBoundingClientRect().width / 720;
    const left = px * scale;
    tip.style.left = (left > svg.clientWidth / 2 ? left - tip.offsetWidth - 12 : left + 12) + 'px';
  });
  svg.addEventListener('pointerleave', hide);
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

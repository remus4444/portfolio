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
});

// Keeps the footer year current.
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

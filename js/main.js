// Shows a placeholder when a 3D model file hasn't been added yet.
document.querySelectorAll('.viewer').forEach((box) => {
  const mv = box.querySelector('model-viewer');
  if (!mv) return;
  const src = mv.getAttribute('src');
  if (!src) { box.classList.add('no-model'); return; }
  fetch(src, { method: 'HEAD' })
    .then((r) => { if (!r.ok) box.classList.add('no-model'); })
    .catch(() => box.classList.add('no-model'));
  mv.addEventListener('error', () => box.classList.add('no-model'));
});

// Keeps the footer year current.
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

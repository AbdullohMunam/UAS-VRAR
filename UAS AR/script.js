window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('a-scene').addEventListener('arReady', () => {
    document.getElementById('loading').style.display = 'none';
  });
  const target = document.querySelector('[mindar-image-target]');
  const fb = document.getElementById('flipbook');
  const board = document.querySelector('#flipboard');

  target.addEventListener('targetFound', () => fb.style.display = 'block');
  target.addEventListener('targetLost', () => fb.style.display = 'none');

  // Resize flipboard agar sesuai marker
  function resize() {
    const s = Math.min(window.innerWidth, window.innerHeight) * 0.5;
    board.setAttribute('scale', `${s/1000} ${s/1000} ${s/1000}`);
  }
  window.addEventListener('resize', resize);
  resize();
});

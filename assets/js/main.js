(() => {
  // Set current year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());

  // Simple 'copy email' helper
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const val = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(val);
        const old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => (btn.textContent = old), 900);
      } catch {
        // ignore
      }
    });
  });


  // YouTube click-to-play (avoids flaky Shorts embeds and always provides a working fallback link)
  document.querySelectorAll('.video-wrap[data-yt-id]').forEach((wrap) => {
    const id = wrap.getAttribute('data-yt-id');
    const btn = wrap.querySelector('button.yt-play');
    if (!id || !btn) return;
    btn.addEventListener('click', () => {
      // Replace thumbnail with an autoplaying embed
      wrap.innerHTML = `
        <iframe loading="lazy" title="Screen Flow Pro walkthrough video"
          src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      `.trim();
    });
  });

})();

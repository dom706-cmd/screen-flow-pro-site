(function(){
  const btn = document.querySelector('[data-menu]');
  const menu = document.querySelector('[data-menu-panel]');
  if(btn && menu){
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const copyBtn = document.querySelector('[data-copy-link]');
  const toast = document.querySelector('.toast');
  if(copyBtn){
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('https://apps.apple.com/us/app/screen-flow-pro-workflows/id6757694636');
        if(toast){
          toast.textContent = 'App Store link copied';
          toast.classList.add('show');
          setTimeout(()=>toast.classList.remove('show'), 1500);
        }
      } catch(e) {
        window.open('https://apps.apple.com/us/app/screen-flow-pro-workflows/id6757694636', '_blank', 'noopener');
      }
    });
  }
})();

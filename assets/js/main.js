(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.hero-dots button')];
  let active = 0;
  let timer;
  const show = (i) => {
    if(!slides.length) return;
    active = (i + slides.length) % slides.length;
    slides.forEach((s,idx) => s.classList.toggle('active', idx === active));
    dots.forEach((d,idx) => d.classList.toggle('active', idx === active));
  };
  const start = () => {
    if(slides.length > 1) timer = setInterval(() => show(active + 1), 5200);
  };
  dots.forEach((d,i) => d.addEventListener('click', () => { clearInterval(timer); show(i); start(); }));
  show(0); start();

  const lb = document.querySelector('.lightbox');
  if(lb){
    const img = lb.querySelector('img');
    document.querySelectorAll('[data-lightbox]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault(); img.src = a.getAttribute('href'); lb.classList.add('open');
      });
    });
    const close = () => lb.classList.remove('open');
    lb.addEventListener('click', e => { if(e.target === lb) close(); });
    lb.querySelector('button')?.addEventListener('click', close);
    document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();

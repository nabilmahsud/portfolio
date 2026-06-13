const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const scrim = document.getElementById('menuScrim');

const closeMenu = () => {
  toggle.classList.remove('open');
  navLinks.classList.remove('mobile-open');
  scrim.classList.remove('active');
  document.body.style.overflow = '';
};

toggle.addEventListener('click', () => {
  const opening = !toggle.classList.contains('open');
  toggle.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
  scrim.classList.toggle('active');
  document.body.style.overflow = opening ? 'hidden' : '';
});

scrim.addEventListener('click', closeMenu);
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

document.querySelectorAll('.exp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 100}ms`;
});

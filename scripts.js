// PAGE TRANSITION
window.addEventListener('load', () => {
  const transition = document.querySelector('.page-transition');
  transition.style.transform = 'translateY(0)';
  setTimeout(() => { transition.style.transform = 'translateY(-100%)'; }, 300);
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.2 });
reveals.forEach(el => observer.observe(el));

// SMOOTH SCROLL
// Smooth scroll for internal links
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href.startsWith('#') && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 900) nav.classList.remove('open');
    }
  });
});




// HAMBURGER TOGGLE
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));

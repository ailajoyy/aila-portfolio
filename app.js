// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinkEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===== SCROLL REVEAL ANIMATION =====
function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.timeline-item, .skill-card, .portfolio-card, .stat, .edu-card, .about-text, .about-photo'
  );

  elements.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ===== STAGGER ANIMATION DELAYS =====
function addStaggerDelays() {
  const groups = [
    '.stats-grid .stat',
    '.skills-grid .skill-card',
    '.timeline-item'
  ];

  groups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });
}

// ===== NAV BACKGROUND ON SCROLL =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.85)';
  }
});

// ===== SMOOTH HOVER PARALLAX ON HERO =====
const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  document.querySelectorAll('.wave').forEach((wave, i) => {
    const speed = (i + 1) * 0.5;
    wave.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px) rotate(${x * 0.1}deg)`;
  });
});

hero.addEventListener('mouseleave', () => {
  document.querySelectorAll('.wave').forEach(wave => {
    wave.style.transition = 'transform 0.5s ease-out';
    wave.style.transform = '';
    setTimeout(() => { wave.style.transition = ''; }, 500);
  });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  addStaggerDelays();
});

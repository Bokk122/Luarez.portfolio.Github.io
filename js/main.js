// ── BACK TO TOP BUTTON ──
// Select the button from the DOM
const backToTopBtn = document.getElementById('back-to-top');

// Show button when user scrolls down more than 300px
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Scroll smoothly back to top when button is clicked
backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ── ACTIVE NAV HIGHLIGHT ──
// Highlights the correct nav link based on which section is visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let currentSection = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

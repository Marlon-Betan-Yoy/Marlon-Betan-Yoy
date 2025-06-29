// File: MyWebSiteJSv1.js

const init = () => {
  // 1) Accordion toggle
  document.querySelectorAll('.accordion').forEach(acc => {
    acc.addEventListener('click', () => {
      // Toggle active state (expand/collapse)
      acc.classList.toggle('active');
    });
  });

  // 2) Nav links now toggle their panels too
  document.querySelectorAll('.page-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const section = document.getElementById(id);
      if (!section) return;
      const acc = section.querySelector('.accordion');
      acc.classList.toggle('active');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

document.addEventListener('DOMContentLoaded', init);


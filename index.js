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

// Assuming the code is loaded after DOM ready

const resumeBtn = document.querySelector('.btn-resume.btn-1014');
const resumeContent = document.getElementById('resume-content');

if (resumeBtn && resumeContent) {
    resumeBtn.addEventListener('click', () => {
        const isHidden = resumeContent.style.display === 'none' || resumeContent.style.display === '';
        resumeContent.style.display = isHidden ? 'block' : 'none';
        resumeBtn.textContent = isHidden ? 'Hide Resume' : 'Show Resume';
        resumeBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    });
}


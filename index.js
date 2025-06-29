
document.addEventListener('DOMContentLoaded', () => {
    // 1) Accordion toggle
    document.querySelectorAll('.accordion').forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('active');
        });
    });

    // 2) Nav links toggle their respective accordion panels
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

    // 3) Resume toggle button
    const resumeBtn = document.querySelector('.btn-1014'); // only class needed
    const resumeContent = document.getElementById('resume-content');

    if (resumeBtn && resumeContent) {
        resumeBtn.addEventListener('click', () => {
            const isHidden = window.getComputedStyle(resumeContent).display === 'none';
            resumeContent.style.display = isHidden ? 'block' : 'none';
            resumeBtn.textContent = isHidden ? 'Hide Resume' : 'Show Resume';
            resumeBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });
    }
});



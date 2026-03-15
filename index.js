
document.addEventListener('DOMContentLoaded', () => {
    // 1) Accordion toggle
    document.querySelectorAll('.accordion').forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('active');

            const panel = acc.nextElementSibling;
            if (panel && panel.classList.contains('panel')) {
                const isVisible = window.getComputedStyle(panel).display !== 'none';
                panel.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    // 2) Nav links toggle their respective section's first accordion
    document.querySelectorAll('.page-nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = link.getAttribute('href').slice(1);
            const section = document.getElementById(id);
            if (!section) return;

            const acc = section.querySelector('.accordion');
            if (acc) {
                acc.classList.toggle('active');
                const panel = acc.nextElementSibling;
                if (panel && panel.classList.contains('panel')) {
                    const isVisible = window.getComputedStyle(panel).display !== 'none';
                    panel.style.display = isVisible ? 'none' : 'block';
                }
            }

            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // 3) Resume toggle
    const resumeBtn = document.querySelector('.btn-1014');
    const resumeContent = document.getElementById('resume-content');

    if (resumeBtn && resumeContent) {
        resumeBtn.addEventListener('click', () => {
            const isHidden = window.getComputedStyle(resumeContent).display === 'none';
            resumeContent.style.display = isHidden ? 'block' : 'none';
            resumeBtn.textContent = isHidden ? 'Hide Resume' : 'Show Resume';
            resumeBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });

        // Start hidden
        resumeContent.style.display = 'none';
    }

    // 4) Hide all panels on page load to prevent flash of open content
    document.querySelectorAll('.panel').forEach(panel => {
        panel.style.display = 'none';
    });
});


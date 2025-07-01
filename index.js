document.addEventListener('DOMContentLoaded', () => {
    // 1) Toggle panels when any .accordion is clicked
    document.querySelectorAll('.accordion').forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('active');

            const panel = acc.nextElementSibling;
            if (panel && panel.classList.contains('panel')) {
                const isVisible = panel.style.display === 'block';
                panel.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    // 2) Nav links scroll + toggle their section's first accordion
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
                    const isVisible = panel.style.display === 'block';
                    panel.style.display = isVisible ? 'none' : 'block';
                }
            }

            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // 3) Resume show/hide toggle
    const resumeBtn = document.querySelector('.btn-1014');
    const resumeContent = document.getElementById('resume-content');

    if (resumeBtn && resumeContent) {
        resumeBtn.addEventListener('click', () => {
            const isHidden = resumeContent.style.display === 'none' || !resumeContent.style.display;
            resumeContent.style.display = isHidden ? 'block' : 'none';
            resumeBtn.textContent = isHidden ? 'Hide Resume' : 'Show Resume';
            resumeBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });

        // Start hidden
        resumeContent.style.display = 'none';
    }
});


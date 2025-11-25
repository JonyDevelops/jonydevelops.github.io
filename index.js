document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && nav) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
});

cd "c:\Users\Jony & Marianna\Documents\Repos\Personal Portfolio Website"
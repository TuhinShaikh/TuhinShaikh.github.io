const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        successMessage.style.display = 'block';
        contactForm.reset();
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        window.setTimeout(() => {
            successMessage.style.display = 'none';
        }, 4500);
    });
}

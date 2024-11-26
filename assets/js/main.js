// Inicialización de GSAP
gsap.registerPlugin(ScrollTrigger);

// Animaciones del Hero
const heroTl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
heroTl
    .from('#heroTitle', { y: 50, opacity: 0 })
    .from('#heroText', { y: 30, opacity: 0 }, '-=0.5')
    .from('#heroButtons', { y: 30, opacity: 0 }, '-=0.3');

// Menú móvil
const menuButton = document.getElementById('menuButton');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

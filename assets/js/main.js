// Inicialización de GSAP
gsap.registerPlugin(ScrollTrigger);

// Animaciones del Hero
const heroTl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
heroTl
    .from('#heroTitle', { y: 50, opacity: 0 })
    .from('#heroText', { y: 30, opacity: 0 }, '-=0.5')
    .from('#heroButtons', { y: 30, opacity: 0 }, '-=0.3');

// Animaciones de las tarjetas
gsap.from('.interactive-card', {
    scrollTrigger: {
        trigger: '.interactive-card',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// Animaciones de las estadísticas
gsap.from('.stats-card', {
    scrollTrigger: {
        trigger: '.stats-card',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// Manejo del menú móvil
const menuButton = document.getElementById('menuButton');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Efecto parallax en la imagen hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Eventos de las tarjetas interactivas
document.querySelectorAll('.interactive-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3
        });
    });
});
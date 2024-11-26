// Configuración de GSAP
gsap.registerPlugin(ScrollTrigger);

class AnimationController {
    constructor() {
        this.handleLoader(); // Añadimos el manejo del loader primero
        this.initializeAnimations();
        this.setupScrollAnimations();
        this.setupHeaderScroll();
        this.setupMobileMenu();
        this.setupFormValidation();
        this.setupScrollToTop();
    }

    // Nuevo método para manejar el loader
    handleLoader() {
        const loader = document.getElementById('loader');
        if (!loader) return;

        const removeLoader = () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        };

        // Remover loader cuando la página esté completamente cargada
        window.addEventListener('load', removeLoader);

        // Fallback por si el evento load no se dispara
        setTimeout(() => {
            if (loader && loader.style.opacity !== '0') {
                removeLoader();
            }
        }, 3000); // 3 segundos como máximo
    }


    initializeAnimations() {
        // Esperamos a que el loader se quite antes de iniciar las animaciones
        const heroTl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            delay: 0.5 // Pequeño delay para asegurar que el loader se ha ido
        });

        heroTl
            .from('.hero-content h1', {
                y: 100,
                opacity: 0,
                duration: 1.2
            })
            .from('.hero-content p', {
                y: 50,
                opacity: 0,
                duration: 1
            }, '-=0.8')
            .from('.hero-content .btn-primary', {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, '-=0.6')
            .from('.hero-image', {
                scale: 1.2,
                opacity: 0,
                duration: 1.5
            }, '-=1');
    }

    // [Resto de tu código existente se mantiene igual...]
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
});

// Debug auxiliar
window.addEventListener('load', () => {
    console.log('Window loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
});

// Verificar si GSAP está cargado
if (window.gsap) {
    console.log('GSAP loaded');
} else {
    console.error('GSAP not loaded');
}
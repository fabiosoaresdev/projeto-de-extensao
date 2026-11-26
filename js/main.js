"use strict";
/**
 * UNEB DCH V - Landing Page Projeto de Extensão Feira Agroecológica
 * TypeScript Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initCounters();
    initGalleryLightbox();
    initGalleryFilter();
    initBackToTop();
    initSmoothScroll();
});
/**
 * Navbar shadow & style on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.main-navbar');
    if (!navbar)
        return;
    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-scrolled');
        }
        else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    // Close mobile navbar on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarContent');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
                else {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}
/**
 * Animated number counters when scrolled into view
 */
function initCounters() {
    const counterElements = document.querySelectorAll('.counter-value');
    if (counterElements.length === 0)
        return;
    const observerOptions = {
        threshold: 0.3
    };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target') || '0', 10);
                const prefix = target.getAttribute('data-prefix') || '';
                const suffix = target.getAttribute('data-suffix') || '';
                animateCounter(target, targetValue, prefix, suffix);
                obs.unobserve(target);
            }
        });
    }, observerOptions);
    counterElements.forEach(el => observer.observe(el));
}
function animateCounter(element, target, prefix = '', suffix = '') {
    const duration = 1600; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;
    const timer = setInterval(() => {
        currentFrame++;
        const progress = easeOutQuad(currentFrame / totalFrames);
        const currentValue = Math.round(target * progress);
        element.textContent = `${prefix}${currentValue}${suffix}`;
        if (currentFrame >= totalFrames) {
            clearInterval(timer);
            element.textContent = `${prefix}${target}${suffix}`;
        }
    }, 1000 / frameRate);
}
function easeOutQuad(t) {
    return t * (2 - t);
}
/**
 * Gallery Lightbox Modal
 */
let currentGalleryItems = [];
let currentItemIndex = 0;
function initGalleryLightbox() {
    const lightboxModalEl = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const btnPrev = document.getElementById('lightboxPrev');
    const btnNext = document.getElementById('lightboxNext');
    if (!lightboxModalEl || !lightboxImage)
        return;
    // Collect all zoomable figures/images
    const zoomableElements = document.querySelectorAll('[data-lightbox="true"]');
    currentGalleryItems = [];
    zoomableElements.forEach((el, index) => {
        const img = el.querySelector('img') || (el.tagName === 'IMG' ? el : null);
        if (!img)
            return;
        const figcaption = el.querySelector('figcaption');
        const captionText = figcaption ? figcaption.textContent || '' : img.alt || '';
        currentGalleryItems.push({
            src: img.getAttribute('data-full') || img.src,
            alt: img.alt,
            caption: captionText
        });
        const itemIndex = index;
        el.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(itemIndex);
        });
        // Support keyboard activation
        el.setAttribute('tabindex', '0');
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(itemIndex);
            }
        });
    });
    function openLightbox(index) {
        if (index < 0 || index >= currentGalleryItems.length)
            return;
        currentItemIndex = index;
        updateLightboxContent();
        // Show bootstrap modal
        const bsModal = window.bootstrap?.Modal.getOrCreateInstance(lightboxModalEl);
        if (bsModal) {
            bsModal.show();
        }
    }
    function updateLightboxContent() {
        const item = currentGalleryItems[currentItemIndex];
        if (!item || !lightboxImage)
            return;
        lightboxImage.src = item.src;
        lightboxImage.alt = item.alt;
        if (lightboxCaption) {
            lightboxCaption.textContent = item.caption || item.alt || '';
        }
    }
    function showNext() {
        if (currentGalleryItems.length === 0)
            return;
        currentItemIndex = (currentItemIndex + 1) % currentGalleryItems.length;
        updateLightboxContent();
    }
    function showPrev() {
        if (currentGalleryItems.length === 0)
            return;
        currentItemIndex = (currentItemIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
        updateLightboxContent();
    }
    btnNext?.addEventListener('click', showNext);
    btnPrev?.addEventListener('click', showPrev);
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const isModalOpen = lightboxModalEl.classList.contains('show');
        if (!isModalOpen)
            return;
        if (e.key === 'ArrowRight') {
            showNext();
        }
        else if (e.key === 'ArrowLeft') {
            showPrev();
        }
    });
}
/**
 * Filter gallery by category
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-filter-item');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
            filterButtons.forEach(b => b.classList.add('btn-outline-primary'));
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('active', 'btn-primary');
            const filter = btn.getAttribute('data-filter') || 'all';
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category') || '';
                if (filter === 'all' || itemCategory === filter || itemCategory.includes(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 30);
                }
                else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}
/**
 * Smooth scrolling for anchors
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href')?.substring(1);
            if (!targetId)
                return;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
/**
 * Back to top floating button
 */
function initBackToTop() {
    const btnTop = document.getElementById('backToTopBtn');
    if (!btnTop)
        return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            btnTop.classList.add('visible');
        }
        else {
            btnTop.classList.remove('visible');
        }
    }, { passive: true });
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

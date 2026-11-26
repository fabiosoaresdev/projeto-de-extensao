/**
 * UNEB DCH V - Landing Page Projeto de Extensão Feira Agroecológica
 * TypeScript Controller
 */

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

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
function initNavbarScroll(): void {
  const navbar = document.querySelector('.main-navbar') as HTMLElement | null;
  if (!navbar) return;

  const handleScroll = (): void => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
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
        const bsCollapse = (window as any).bootstrap?.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
}

/**
 * Animated number counters when scrolled into view
 */
function initCounters(): void {
  const counterElements = document.querySelectorAll<HTMLElement>('.counter-value');
  if (counterElements.length === 0) return;

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
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

function animateCounter(element: HTMLElement, target: number, prefix: string = '', suffix: string = ''): void {
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

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

/**
 * Gallery Lightbox Modal
 */
let currentGalleryItems: GalleryItem[] = [];
let currentItemIndex: number = 0;

function initGalleryLightbox(): void {
  const lightboxModalEl = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement | null;
  const lightboxCaption = document.getElementById('lightboxCaption') as HTMLElement | null;
  const btnPrev = document.getElementById('lightboxPrev') as HTMLButtonElement | null;
  const btnNext = document.getElementById('lightboxNext') as HTMLButtonElement | null;

  if (!lightboxModalEl || !lightboxImage) return;

  // Collect all zoomable figures/images
  const zoomableElements = document.querySelectorAll<HTMLElement>('[data-lightbox="true"]');

  currentGalleryItems = [];
  zoomableElements.forEach((el, index) => {
    const img = el.querySelector('img') || (el.tagName === 'IMG' ? (el as HTMLImageElement) : null);
    if (!img) return;

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
    el.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(itemIndex);
      }
    });
  });

  function openLightbox(index: number): void {
    if (index < 0 || index >= currentGalleryItems.length) return;
    currentItemIndex = index;
    updateLightboxContent();

    // Show bootstrap modal
    const bsModal = (window as any).bootstrap?.Modal.getOrCreateInstance(lightboxModalEl);
    if (bsModal) {
      bsModal.show();
    }
  }

  function updateLightboxContent(): void {
    const item = currentGalleryItems[currentItemIndex];
    if (!item || !lightboxImage) return;

    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;

    if (lightboxCaption) {
      lightboxCaption.textContent = item.caption || item.alt || '';
    }
  }

  function showNext(): void {
    if (currentGalleryItems.length === 0) return;
    currentItemIndex = (currentItemIndex + 1) % currentGalleryItems.length;
    updateLightboxContent();
  }

  function showPrev(): void {
    if (currentGalleryItems.length === 0) return;
    currentItemIndex = (currentItemIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    updateLightboxContent();
  }

  btnNext?.addEventListener('click', showNext);
  btnPrev?.addEventListener('click', showPrev);

  // Keyboard navigation
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const isModalOpen = lightboxModalEl.classList.contains('show');
    if (!isModalOpen) return;

    if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });
}

/**
 * Filter gallery by category
 */
function initGalleryFilter(): void {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll<HTMLElement>('.gallery-filter-item');

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
        } else {
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
function initSmoothScroll(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href')?.substring(1);
      if (!targetId) return;

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
function initBackToTop(): void {
  const btnTop = document.getElementById('backToTopBtn') as HTMLButtonElement | null;
  if (!btnTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btnTop.classList.add('visible');
    } else {
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

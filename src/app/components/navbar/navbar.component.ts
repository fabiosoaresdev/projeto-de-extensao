import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly scrollProgress = signal<number>(0);
  readonly activeSection = signal<string>('inicio');

  private readonly sectionIds = ['inicio', 'sobre', 'oficinas', 'catalogo', 'feirantes', 'galeria', 'videos'];

  ngOnInit(): void {
    this.updateScrollMetrics();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollMetrics();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 1200 && this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false);
    }
  }

  private updateScrollMetrics(): void {
    const scrollY = window.scrollY;
    this.isScrolled.set(scrollY > 30);

    // Barra de progresso de leitura
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    this.scrollProgress.set(Math.min(100, Math.max(0, progress)));

    // Seção ativa atual
    const scrollPos = scrollY + 160;
    for (let i = this.sectionIds.length - 1; i >= 0; i--) {
      const id = this.sectionIds[i];
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('inicio');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

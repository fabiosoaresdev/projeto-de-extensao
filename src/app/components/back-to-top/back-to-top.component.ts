import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <button type="button" 
            class="back-to-top-btn" 
            [class.visible]="isVisible()" 
            (click)="scrollToTop()" 
            aria-label="Voltar ao início da página"
            title="Voltar ao topo">
      <svg class="progress-ring" width="48" height="48" viewBox="0 0 48 48">
        <circle class="progress-ring-bg" stroke="#e2e8f0" stroke-width="3" fill="transparent" r="21" cx="24" cy="24"/>
        <circle class="progress-ring-fill" stroke="#28a745" stroke-width="3" fill="transparent" r="21" cx="24" cy="24"
                [style.stroke-dasharray]="circumference"
                [style.stroke-dashoffset]="dashOffset()"/>
      </svg>
      <i class="bi bi-chevron-up back-to-top-icon"></i>
    </button>
  `
})
export class BackToTopComponent {
  readonly isVisible = signal<boolean>(false);
  readonly dashOffset = signal<number>(132);
  readonly circumference = 2 * Math.PI * 21; // ~131.95

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    this.isVisible.set(scrollY > 300);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;
    const offset = this.circumference * (1 - Math.min(1, Math.max(0, progress)));
    this.dashOffset.set(offset);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

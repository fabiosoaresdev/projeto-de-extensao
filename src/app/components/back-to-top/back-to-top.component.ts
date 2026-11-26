import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <button type="button" 
            class="back-to-top" 
            [class.visible]="isVisible()" 
            (click)="scrollToTop()" 
            aria-label="Voltar ao início">
      <i class="bi bi-arrow-up"></i>
    </button>
  `
})
export class BackToTopComponent {
  readonly isVisible = signal<boolean>(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 350);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

import { Component, HostListener, inject } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent {
  readonly lightbox = inject(LightboxService);

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.lightbox.isOpen()) return;

    if (event.key === 'Escape') {
      this.lightbox.close();
    } else if (event.key === 'ArrowRight') {
      this.lightbox.next();
    } else if (event.key === 'ArrowLeft') {
      this.lightbox.prev();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.lightbox.close();
    }
  }
}

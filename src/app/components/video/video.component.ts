import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html'
})
export class VideoComponent {
  readonly isModalOpen = signal<boolean>(false);

  openVideoModal(): void {
    this.isModalOpen.set(true);
  }

  closeVideoModal(): void {
    this.isModalOpen.set(false);
  }
}

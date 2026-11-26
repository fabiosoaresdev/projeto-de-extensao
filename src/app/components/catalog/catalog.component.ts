import { Component, computed, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { LightboxService } from '../../services/lightbox.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  private readonly projectService = inject(ProjectService);
  private readonly lightbox = inject(LightboxService);

  readonly catalogPages = this.projectService.catalogPages;
  readonly activeIndex = signal<number>(0);
  readonly isAutoPlaying = signal<boolean>(false);
  private autoPlayTimer: any = null;

  readonly currentPage = computed(() => {
    const pages = this.catalogPages();
    const idx = this.activeIndex();
    return pages[idx] || pages[0];
  });

  selectPage(index: number): void {
    if (index >= 0 && index < this.catalogPages().length) {
      this.activeIndex.set(index);
    }
  }

  nextPage(): void {
    const next = (this.activeIndex() + 1) % this.catalogPages().length;
    this.activeIndex.set(next);
  }

  prevPage(): void {
    const total = this.catalogPages().length;
    const prev = (this.activeIndex() - 1 + total) % total;
    this.activeIndex.set(prev);
  }

  toggleAutoPlay(): void {
    if (this.isAutoPlaying()) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  private startAutoPlay(): void {
    this.isAutoPlaying.set(true);
    this.autoPlayTimer = setInterval(() => {
      this.nextPage();
    }, 3500);
  }

  private stopAutoPlay(): void {
    this.isAutoPlaying.set(false);
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  openFullscreen(): void {
    const items = this.catalogPages().map(p => ({
      src: p.src,
      alt: p.title,
      caption: `${p.label} - ${p.title}`
    }));
    this.lightbox.open(items, this.activeIndex());
  }

  openPageAt(index: number): void {
    this.selectPage(index);
    this.openFullscreen();
  }

  downloadCatalog(): void {
    // Abre a capa ou arquivo em nova aba
    window.open('images/preview/catalogo-capa.jpg', '_blank');
  }
}

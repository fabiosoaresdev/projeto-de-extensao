import { Component, computed, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { LightboxService } from '../../services/lightbox.service';
import { GalleryItem } from '../../models/project.models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  private readonly projectService = inject(ProjectService);
  private readonly lightbox = inject(LightboxService);

  readonly allItems = this.projectService.galleryItems;
  readonly activeCategory = signal<'all' | 'feira' | 'oficinas' | 'produtos'>('all');

  readonly filteredItems = computed<GalleryItem[]>(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.allItems();
    return this.allItems().filter(item => item.category === cat);
  });

  setCategory(cat: 'all' | 'feira' | 'oficinas' | 'produtos'): void {
    this.activeCategory.set(cat);
  }

  openLightbox(item: GalleryItem): void {
    const list = this.filteredItems();
    const index = list.findIndex(i => i.id === item.id);
    this.lightbox.open(list, Math.max(0, index));
  }
}

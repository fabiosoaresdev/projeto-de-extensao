import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  private readonly projectService = inject(ProjectService);
  private readonly lightbox = inject(LightboxService);

  readonly catalogPages = this.projectService.catalogPages;

  openPage(index: number): void {
    const items = this.catalogPages().map(p => ({
      src: p.src,
      alt: p.title,
      caption: `${p.label} - ${p.title}`
    }));
    this.lightbox.open(items, index);
  }

  downloadCatalog(): void {
    alert('O arquivo oficial do catálogo em PDF pode ser baixado ou vinculado aqui!');
  }
}

import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-workshops',
  standalone: true,
  templateUrl: './workshops.component.html'
})
export class WorkshopsComponent {
  private readonly projectService = inject(ProjectService);
  private readonly lightbox = inject(LightboxService);

  readonly workshops = this.projectService.workshops;

  openImage(src: string, alt: string, caption: string): void {
    this.lightbox.open([{ src, alt, caption }], 0);
  }
}

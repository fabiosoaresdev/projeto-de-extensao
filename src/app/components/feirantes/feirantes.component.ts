import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-feirantes',
  standalone: true,
  templateUrl: './feirantes.component.html'
})
export class FeirantesComponent {
  private readonly projectService = inject(ProjectService);

  readonly organizations = this.projectService.organizations;
  readonly entrepreneurs = this.projectService.entrepreneurs;
}

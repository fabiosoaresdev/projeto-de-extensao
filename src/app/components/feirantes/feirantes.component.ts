import { Component, computed, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feirantes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feirantes.component.html'
})
export class FeirantesComponent {
  private readonly projectService = inject(ProjectService);

  readonly rawOrganizations = this.projectService.organizations;
  readonly rawEntrepreneurs = this.projectService.entrepreneurs;

  readonly searchQuery = signal<string>('');
  readonly selectedType = signal<'todos' | 'coletivos' | 'individuais'>('todos');

  readonly filteredOrganizations = computed(() => {
    if (this.selectedType() === 'individuais') return [];
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.rawOrganizations();
    return this.rawOrganizations().filter(org => 
      org.name.toLowerCase().includes(query) ||
      org.origin.toLowerCase().includes(query) ||
      org.description.toLowerCase().includes(query)
    );
  });

  readonly filteredEntrepreneurs = computed(() => {
    if (this.selectedType() === 'coletivos') return [];
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.rawEntrepreneurs();
    return this.rawEntrepreneurs().filter(emp =>
      emp.name.toLowerCase().includes(query) ||
      emp.specialty.toLowerCase().includes(query)
    );
  });

  readonly totalMatches = computed(() => {
    return this.filteredOrganizations().length + this.filteredEntrepreneurs().length;
  });

  setType(type: 'todos' | 'coletivos' | 'individuais'): void {
    this.selectedType.set(type);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }
}

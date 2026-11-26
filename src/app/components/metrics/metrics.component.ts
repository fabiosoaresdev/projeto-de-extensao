import { Component, ElementRef, OnInit, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MetricItem } from '../../models/project.models';

@Component({
  selector: 'app-metrics',
  standalone: true,
  templateUrl: './metrics.component.html'
})
export class MetricsComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly el = inject(ElementRef);

  readonly metrics = this.projectService.metrics;
  readonly displayValues = signal<number[]>([0, 0, 0, 0, 0]);

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      }, { threshold: 0.2 });

      observer.observe(this.el.nativeElement);
    } else {
      this.displayValues.set(this.metrics().map(m => m.value));
    }
  }

  private animateCounters(): void {
    const targets = this.metrics().map(m => m.value);
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = progress * (2 - progress); // easeOutQuad
      
      const current = targets.map(t => Math.round(t * eased));
      this.displayValues.set(current);

      if (step >= steps) {
        clearInterval(timer);
        this.displayValues.set(targets);
      }
    }, stepTime);
  }
}

import { Component } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  constructor(private readonly lightbox: LightboxService) {}

  openPreview(): void {
    this.lightbox.open([
      {
        src: 'images/foto-01.jpeg',
        alt: 'Projeto da Feira Agroecológica na UNEB Campus V',
        caption: 'Projeto de Extensão da Feira Agroecológica na UNEB Campus V - Santo Antônio de Jesus'
      }
    ], 0);
  }
}

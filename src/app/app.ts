import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { AboutComponent } from './components/about/about.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FeirantesComponent } from './components/feirantes/feirantes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoComponent } from './components/video/video.component';
import { CreditsComponent } from './components/credits/credits.component';
import { FooterComponent } from './components/footer/footer.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MetricsComponent,
    AboutComponent,
    WorkshopsComponent,
    CatalogComponent,
    FeirantesComponent,
    GalleryComponent,
    VideoComponent,
    CreditsComponent,
    FooterComponent,
    LightboxComponent,
    BackToTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

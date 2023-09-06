import { Component, } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  lightboxImgSrc = '';
  lightboxImgAlt = '';

  abrirLightbox(imgSrc: string, imgAlt: string): void {
    this.lightboxImgSrc = imgSrc;
    this.lightboxImgAlt = imgAlt;
    
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.display = 'block';
    }
  }

  fecharLightbox(): void {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.display = 'none';
    }
  }
}

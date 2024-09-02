import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private body: HTMLElement | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.initModo();
    }
  }

  private setBody() {
    if (this.isBrowser) {
      this.body = document.querySelector('body');
    }
  }

  initModo() {
    if (!this.isBrowser) return; // No hacer nada si no está en el navegador

    this.setBody(); // Inicializa el `body` en el navegador
    const modoActual = localStorage.getItem('modo');

    if (modoActual === 'noche' && this.body) {
      this.body.classList.add('noche');
    } else if (this.body) {
      this.body.classList.remove('noche');
    }
  }

  cambiarModo() {
    if (!this.isBrowser) return; // No hacer nada si no está en el navegador

    this.setBody(); // Inicializa el `body` en el navegador
    const modoActual = localStorage.getItem('modo');

    if (modoActual === 'dia' && this.body) {
      this.body.classList.add('noche');
      localStorage.setItem('modo', 'noche');
    } else if (this.body) {
      this.body.classList.remove('noche');
      localStorage.setItem('modo', 'dia');
    }
  }

  getModoActual(): string | null {
    if (!this.isBrowser) return null; // No hacer nada si no está en el navegador
    return localStorage.getItem('modo');
  }
}

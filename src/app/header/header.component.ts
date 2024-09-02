import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  private platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initModo();
    }
  }

  initModo() {
    const body = document.querySelector('body');
    const switches = document.querySelectorAll('.switch input[type="checkbox"]');

    switches.forEach(switchElement => {
      if (switchElement instanceof HTMLInputElement) {
        switchElement.checked = localStorage.getItem('modo') === 'noche';
        switchElement.addEventListener('change', () => this.cambiarModo());
      }
    });

    if (localStorage.getItem('modo') === 'noche' && body) {
      body.classList.add('noche');
    } else if (body) {
      body.classList.remove('noche');
    }
  }

  cambiarModo() {
    const body = document.querySelector('body');
    const modoActual = localStorage.getItem('modo');

    if (modoActual === 'dia' && body) {
      body.classList.add('noche');
      localStorage.setItem('modo', 'noche');
    } else if (body) {
      body.classList.remove('noche');
      localStorage.setItem('modo', 'dia');
    }

    const switches = document.querySelectorAll('.switch input[type="checkbox"]');
    switches.forEach(switchElement => {
      if (switchElement instanceof HTMLInputElement) {
        switchElement.checked = localStorage.getItem('modo') === 'noche';
      }
    });
  }

  toggleMenu() {
    if (isPlatformBrowser(this.platformId)) {
      const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
      if (mobileMenu) {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
      }
    }
  }
}

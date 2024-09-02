import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  private platformId: Object;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private themeService: ThemeService
  ) {
    this.platformId = platformId;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initModo();
    }
  }

  initModo() {
    this.themeService.initModo();
    const switches = document.querySelectorAll('.switch input[type="checkbox"]');
    
    switches.forEach(switchElement => {
      if (switchElement instanceof HTMLInputElement) {
        switchElement.checked = this.themeService.getModoActual() === 'noche';
        switchElement.addEventListener('change', () => this.cambiarModo());
      }
    });
  }

  cambiarModo() {
    this.themeService.cambiarModo();
    const switches = document.querySelectorAll('.switch input[type="checkbox"]');
    switches.forEach(switchElement => {
      if (switchElement instanceof HTMLInputElement) {
        switchElement.checked = this.themeService.getModoActual() === 'noche';
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

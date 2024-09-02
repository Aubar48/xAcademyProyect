import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Cambiar el título de la página si es "Home"
      this.changeTitleIfHome();
    }
  }

  changeTitleIfHome() {
    if (isPlatformBrowser(this.platformId)) {
      if (document.title === 'Home') {
        let alertShow = false;
        setInterval(() => {
          document.title = alertShow ? 'Home' : 'xAcademy';
          alertShow = !alertShow;
        }, 1000);
      }
    }
  }
}

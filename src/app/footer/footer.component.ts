import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.updateDateTime();
    }
  }

  // Función para actualizar la fecha y hora
  updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    
    if (datetimeElement) {
      datetimeElement.textContent = `${date} ${time}`;
    }

    // Programar la próxima actualización
    requestAnimationFrame(this.updateDateTime.bind(this));
  }
}

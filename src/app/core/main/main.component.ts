import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

/**
 * Componente principal de la aplicación.
 * Este componente se encarga de inicializar el modo de tema al iniciar.
 */
@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  /**
   * Constructor del componente MainComponent.
   * @param themeService - Servicio para gestionar el tema de la aplicación.
   */
  constructor(private themeService: ThemeService) {}

  /**
   * Método del ciclo de vida de Angular que se llama al inicializar el componente.
   * Inicializa el modo de tema mediante el servicio de tema.
   */
  ngOnInit(): void {
    this.themeService.initModo();
  }
}

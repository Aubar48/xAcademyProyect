import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-burger-menu-elemento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu-elemento.component.html',
  styleUrl: './burger-menu-elemento.component.scss'
})
export class BurgerMenuElementoComponent {
  @Input() burgerMenuItems?:{
    text:string,
    route:string
  }[];
}

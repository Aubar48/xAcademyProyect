import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-elemento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-elemento.component.html',
  styleUrl: './menu-elemento.component.scss'
})
export class MenuElementoComponent {
  @Input() menuItems?:{
    text:string,
    route:string
  }[];

}

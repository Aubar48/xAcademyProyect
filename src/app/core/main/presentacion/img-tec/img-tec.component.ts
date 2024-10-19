import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Image } from '../../../../model/image.model';

@Component({
  selector: 'app-img-tec',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-tec.component.html',
  styleUrl: './img-tec.component.scss'
})
export class ImgTecComponent {
// Datos de las imágenes
images:Image[] = [
  {
    class: 'img-tec-1',
    src: 'https://technologywithpurpose.org/wp-content/uploads/2022/10/technology-with-purpose.svg',
    alt: 'technology-withPurpose'
  },
  {
    class: 'img-tec-2',
    src: 'https://technologywithpurpose.org/wp-content/uploads/2023/02/xacademy-white.svg',
    alt: 'xAcademy'
  }
];
}

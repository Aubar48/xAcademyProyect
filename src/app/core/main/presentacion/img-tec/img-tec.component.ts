import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Image } from '../../../../model/image.model';
import { ImageService } from '../../../../services/image/image.service';

@Component({
  selector: 'app-img-tec',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-tec.component.html',
  styleUrl: './img-tec.component.scss'
})
export class ImgTecComponent {
// Datos de las imágenes
images?: Image[];

constructor(private ImageService: ImageService) {}

ngOnInit() {
  this.images = this.ImageService.images;
  }
}

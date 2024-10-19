import { Injectable } from '@angular/core';
import { Image } from '../../model/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = [
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
  constructor() { }
}

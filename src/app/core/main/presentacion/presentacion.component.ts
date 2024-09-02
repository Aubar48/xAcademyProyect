import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ImgTecComponent } from './img-tec/img-tec.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [FormComponent,ImgTecComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}

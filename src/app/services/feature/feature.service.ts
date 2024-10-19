import { Injectable } from '@angular/core';
import { Feature } from '../../model/feature.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  features: Feature[] = [
    {
      icon: 'add_box',
      title: 'Easy to Use',
      description: 'Editing and customizing Essential Landing is easy and fast'
    },
    {
      icon: 'star_half',
      title: '100% Responsive',
      description: 'Editing and customizing Essential Landing is easy and fast'
    },
    {
      icon: 'system_update_alt',
      title: '100+ New pages',
      description: 'Editing and customizing Essential Landing is easy and fast'
    }
  ];
  constructor() { }
  /*getFeatures(): Observable<Feature[]> {
    return new Observable((observer) => {
      setTimeout(()=>{
        observer.next(this.features);  // Aquí es donde emitimos los datos
      },1000);
      setTimeout(()=>{
        observer.next(this.features);  // Aquí es donde emitimos los datos
      },2000);
      setTimeout(()=>{
        observer.next(this.features);  // Aquí es donde emitimos los datos
        observer.complete();           // Finalizamos la emisión
      },3000);
    });
  }*/
 getFeatures(): Observable<Feature[]> {
    return new Observable((observer) => {
      setTimeout(()=>{
        observer.next(this.features);  // Aquí es donde emitimos los datos
        observer.complete();           // Finalizamos la emisión
      },1000);
    });
  }
}

import { Injectable } from '@angular/core';
import { Feature } from '../../model/feature.model';

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
}

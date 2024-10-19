import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Feature } from '../../../model/feature.model';
import { FeatureService } from '../../../services/feature/feature.service';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  features?: Feature[];
  
  subscription = new Subscription();

  constructor(private FeatureService: FeatureService) {}

 /* ngOnInit() {
    this.FeatureService.getFeatures().subscribe({
      next: res =>{
        console.log('Dato')
        this.features = res;
      },
      error: err => {
        console.warn(err); 
    },
    complete:() => {
      console.log('Completado')
    }
    })
  } */
  ngOnInit() {
    this.subscription.add(this.FeatureService.getFeatures().pipe(
      map(res => {
      res[0].title = "Hard to use"
      return res;
    })
  ).subscribe({
      next: res => {
        console.log('se reciben datos');
        this.features = res;
      },
      error: error => {
      console.warn('error', error)
    }
  }))
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}


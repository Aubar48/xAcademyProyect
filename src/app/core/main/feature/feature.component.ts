import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Feature } from '../../../model/feature.model';
import { FeatureService } from '../../../services/feature/feature.service';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  features?: Feature[];
  
  constructor(private FeatureService: FeatureService) {}

  ngOnInit() {
    this.features = this.FeatureService.features;
  }
}


import { Component } from '@angular/core';
import { Food } from '../../../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.less']
})
export class FoodDetailsComponent {

  food: Food;

  constructor(private route: ActivatedRoute) {
    this.food = this.route.snapshot.data['food'];
  }

}

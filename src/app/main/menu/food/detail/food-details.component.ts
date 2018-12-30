import { Component } from '@angular/core';
import { Addition, Food } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { Selector } from '../../../../common/Selector';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.less']
})
export class FoodDetailsComponent {

  food: Food;
  selector: Selector<Addition>;

  constructor(private route: ActivatedRoute) {
    this.food = this.route.snapshot.data['food'];
    this.selector = new Selector<Addition>(this.food.additions);
  }
}

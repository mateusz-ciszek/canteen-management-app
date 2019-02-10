import { Component } from '@angular/core';
import { Addition, Food } from '../../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Selector } from '../../../../common/Selector';
import { noop } from 'rxjs';
import { DataStorageService } from '../../../../services/data-storage.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.less']
})
export class FoodDetailsComponent {

  food: Food;
  selector: Selector<Addition>;

  constructor(
      private route: ActivatedRoute,
      private dataStorage: DataStorageService,
      private router: Router) {

    this.food = this.route.snapshot.data['food'];
    this.selector = new Selector<Addition>(this.food.additions);
  }

  modifyFood() {
    this.dataStorage.saveData('model', this.food);
    const menuId: string = this.route.snapshot.params['menuId'];
    this.router.navigateByUrl(`/main/menu/${menuId}/food/create`).then(noop);
  }
}

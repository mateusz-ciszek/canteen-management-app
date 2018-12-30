import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../../models';
import { Selector } from '../../../common/Selector';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent {

  menus: Menu[];
  totalMealsCount: number = 0;
  selector: Selector<Menu>;

  constructor(private route: ActivatedRoute) {
    this.menus = this.route.snapshot.data['menus'];
    this.selector = new Selector<Menu>(this.menus);
    this.totalMealsCount = MenuListComponent.calculateTotalMealsCount(this.menus);
  }

  private static calculateTotalMealsCount(menus: Menu[]): number {
    return menus.map(value => value.foods.length)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}

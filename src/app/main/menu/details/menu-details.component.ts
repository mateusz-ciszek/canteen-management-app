import { Component } from '@angular/core';
import { Food, Menu } from '../../../models';
import { ActivatedRoute } from '@angular/router';
import { Selector } from '../../../common/Selector';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.less']
})
export class MenuDetailsComponent {

  menu: Menu;
  selector: Selector<Food>;

  constructor(private route: ActivatedRoute) {
    this.menu = this.route.snapshot.data['menu'];
    this.selector = new Selector<Food>(this.menu.foods);
  }

}

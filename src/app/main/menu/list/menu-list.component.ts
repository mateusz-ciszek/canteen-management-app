import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../../models';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent {

  menus: Menu[];

  constructor(private route: ActivatedRoute) {
    this.menus = this.route.snapshot.data['menus'];
    console.log(this.menus);
  }

}

import { Component } from '@angular/core';
import { Menu } from './menu-list-resolver';
import { ActivatedRoute } from '@angular/router';

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

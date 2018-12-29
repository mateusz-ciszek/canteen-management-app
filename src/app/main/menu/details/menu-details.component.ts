import { Component } from '@angular/core';
import { Menu } from '../../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.less']
})
export class MenuDetailsComponent {

  menu: Menu;

  constructor(private route: ActivatedRoute) {
    this.menu = this.route.snapshot.data['menu'];
    console.log(this.menu);
  }

}

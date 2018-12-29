import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../../models';
import { noop } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent {

  menus: Menu[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.menus = this.route.snapshot.data['menus'];
    console.log(this.menus);
  }

  openDetails(id: string): void {
    this.router.navigateByUrl(`/main/menu/details/${id}`).catch(noop);
  }
}

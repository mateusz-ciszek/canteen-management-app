import { Component } from '@angular/core';
import { CreateFoodModel, CreateMenuModel } from '../../../models';
import { Selector } from '../../../common/Selector';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.less']
})
export class MenuCreateComponent {

  model: CreateMenuModel = new CreateMenuModel();
  selector: Selector<CreateFoodModel> = new Selector<CreateFoodModel>(this.model.foods);

  constructor(private menuService: MenuService) { }

  createNewMenu() {
    this.menuService.createMenu(this.model).subscribe(result => console.log(result));
  }
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CreateFoodModel, CreateMenuModel } from '../../../models';
import { Selector } from '../../../common/Selector';
import { ModalService } from '../../../services/modal.service';
import { MenuCreateSummaryComponent } from './summary/menu-create-summary.component';
import { MenuCreateFoodComponent } from './food/menu-create-food.component';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.less']
})
export class MenuCreateComponent {

  model: CreateMenuModel = new CreateMenuModel();
  selector: Selector<CreateFoodModel> = new Selector<CreateFoodModel>(this.model.foods);

  constructor(private modalService: ModalService, private location: Location) { }

  createNewMenu() {
    const inputs = { model: this.model };
    this.modalService.init(MenuCreateSummaryComponent, inputs, {});
    this.modalService.onClose().subscribe(result => {
      if (result === true) {
        this.location.back();
      }
    });
  }

  addMeal() {
    const foodModel: CreateFoodModel = new CreateFoodModel();
    const inputs = { model: foodModel };
    const outputs = { model: foodModel };
    this.modalService.init(MenuCreateFoodComponent, inputs, outputs);
    this.modalService.onClose().subscribe(result => {
      if (result) {
        this.model.foods.push(foodModel);
      }
    });
  }

  removeMeals(): void {
    this.selector.getSelectedItems().forEach(item => this.model.foods.splice(this.model.foods.indexOf(item), 1));
    this.selector.setItems(this.model.foods);
  }
}

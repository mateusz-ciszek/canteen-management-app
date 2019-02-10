import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { CreateFoodAdditionModel, CreateFoodModel } from '../../../../models';

@Component({
  selector: 'app-menu-create-food',
  templateUrl: './menu-create-food.component.html',
  styleUrls: ['./menu-create-food.component.less'],
})
export class MenuCreateFoodComponent {

  @Input()
  model: CreateFoodModel;

  constructor(private modalService: ModalService) { }

  close(): void {
    this.modalService.destroy();
  }

  addMeal(): void {
    // FIXME: add validation before allowing to create
    this.modalService.destroy(true);
  }

  removeAddition(index: number): void {
    this.model.additions.splice(index, 1);
  }

  createAddition(): void {
    this.model.additions.push(new CreateFoodAdditionModel());
  }

}

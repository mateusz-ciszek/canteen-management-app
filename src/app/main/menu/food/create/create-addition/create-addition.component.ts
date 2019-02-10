import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../../../../services/modal.service';
import { CreateFoodAdditionModel } from '../../../../../models';
import { FoodUtil } from '../food-util';

@Component({
  selector: 'app-create-addition',
  templateUrl: './create-addition.component.html',
  styleUrls: ['./create-addition.component.less']
})
export class CreateAdditionComponent {

  model: CreateFoodAdditionModel;

  @Output()
  output: EventEmitter<CreateFoodAdditionModel>;

  constructor(private modalService: ModalService) {
    this.model = FoodUtil.getCreateFoodAdditionModel();
  }

  close() {
    this.modalService.destroy();
  }

  createAddition() {
    if (this.output) {
      this.output.emit(this.model);
    }
    this.modalService.destroy(true);
  }

}

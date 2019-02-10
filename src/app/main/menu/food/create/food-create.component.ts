import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { CreateFoodAdditionModel, CreateFoodModel } from '../../../../models';
import { FoodService } from '../../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../../services/modal.service';
import { CreateAdditionComponent } from './create-addition/create-addition.component';
import { Selector } from '../../../../common/Selector';
import { FoodUtil } from './food-util';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.less'],
})
export class FoodCreateComponent {

  model: CreateFoodModel = FoodUtil.emptyCreateFoodModel();
  image = null;
  imagePath: string = null;
  imageLoading: boolean = false;

  selector: Selector<CreateFoodAdditionModel>;

  @ViewChild('fileInput')
  fileInput: ElementRef<HTMLInputElement>;

  constructor(
      private foodService: FoodService,
      private activatedRoute: ActivatedRoute,
      private modalService: ModalService,
      private router: Router,
  ) {

    this.selector = new Selector(this.model.additions);
  }

  loadImage(event): void {
    this.model.image = <File>event.target.files[0];
    this.imagePath = event.target.files[0].name;

    const reader = new FileReader();
    reader.onloadstart = () => this.imageLoading = true;
    reader.onload = (e: any) => this.image = e.target.result;
    reader.onloadend = () => this.imageLoading = false;
    reader.readAsDataURL(this.model.image);
  }

  removeImage() {
    this.image = null;
    this.model.image = null;
    this.fileInput.nativeElement.value = null;
    this.imagePath = null;
  }

  save(): void {
    const menuId = this.activatedRoute.snapshot.params['menuId'];
    this.foodService.saveFood(menuId, this.model)
          .subscribe(null, null, () => this.router.navigateByUrl(`/main/menu/details/${menuId}`));
  }

  newAddition() {
    const emitter: EventEmitter<CreateFoodAdditionModel> = new EventEmitter();
    emitter.subscribe(result => this.model.additions.push(result));
    this.modalService.init(CreateAdditionComponent, {}, { output: emitter });
  }

  deleteAdditions() {
    this.selector.getSelectedItems().forEach(toDelete => {
      this.model.additions.splice(this.model.additions.indexOf(toDelete), 1);
    });
  }

}

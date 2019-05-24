import { Component } from '@angular/core';
import { Addition, Food } from '../../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Selector } from '../../../../common/Selector';
import { noop } from 'rxjs';
import { DataStorageService } from '../../../../services/data-storage.service';
import { ModalService } from '../../../../services/modal.service';
import { ConfirmationDataInput, ConfirmationModalComponent } from '../../../../common/modal/confirmation/confirmation-modal.component';
import { FoodService } from '../../../../services/food.service';
import { AlertsService } from '../../../../services/alerts.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.less']
})
export class FoodDetailsComponent {

  food: Food;
  selector: Selector<Addition>;

  constructor(
      private route: ActivatedRoute,
      private dataStorage: DataStorageService,
      private router: Router,
      private modalService: ModalService,
      private foodService: FoodService,
      private alertService: AlertsService) {

    this.food = this.route.snapshot.data['food'];
    this.selector = new Selector<Addition>(this.food.additions);
  }

  modifyFood() {
    this.dataStorage.saveData('model', this.food);
    const menuId: string = this.route.snapshot.params['menuId'];
    this.router.navigateByUrl(`/main/menu/${menuId}/food/create`).then(noop);
  }

  deleteMeal() {
    const input: ConfirmationDataInput = {
      title: 'Delete meal',
      message: `Are you sure you want to delete meal "${this.food.name}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Keep',
    };
    this.modalService.init(ConfirmationModalComponent, input, {}).subscribe(result => {
      if (result) {
        this.doDeleteMeal();
      }
    });
  }

  private doDeleteMeal() {
    this.foodService.deleteFoods([ this.food._id ]).subscribe(
      () => {
        this.alertService.addAlert('The meal has been deleted', 'SUCCESS');
        this.router.navigateByUrl(`/main/menu/details/${this.route.snapshot.params['menuId']}`).then(noop);
      },
      () => this.alertService.addAlert('Error deleting meal. Please try again later', 'FAILURE'),
    );
  }
}

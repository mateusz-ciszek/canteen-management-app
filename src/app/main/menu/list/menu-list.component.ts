import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../../models';
import { Selector } from '../../../common/Selector';
import { MenuService } from '../../../services/menu.service';
import { ModalService } from '../../../services/modal.service';
import { ConfirmationDataInput, ConfirmationModalComponent } from '../../../common/modal/confirmation/confirmation-modal.component';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent {

  menus: Menu[];
  totalMealsCount: number = 0;
  selector: Selector<Menu>;

  constructor(
      private route: ActivatedRoute,
      private menuService: MenuService,
      private modalService: ModalService,
      private alertService: AlertsService) {
    this.menus = this.route.snapshot.data['menus'];
    this.selector = new Selector<Menu>(this.menus);
    this.totalMealsCount = MenuListComponent.calculateTotalMealsCount(this.menus);
  }

  private static calculateTotalMealsCount(menus: Menu[]): number {
    return menus.map(value => value.foods.length)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  deleteOne(): void {
    const input: ConfirmationDataInput = {
      title: `Delete menu?`,
      message: `Are you sure you want to delete menu "${this.selector.getSelectedItems()[0].name}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Keep',
    };
    this.confirmDelete(input);
  }

  deleteMany(): void {
    const menuNames: string = this.selector.getSelectedItems().map(menu => `"${menu.name}"`).join(', ');
    const input: ConfirmationDataInput = {
      title: `Delete ${this.selector.getSelectedCount()} menus?`,
      message: `Are you sure you want to delete following menus: ${menuNames}?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Keep',
    };
    this.confirmDelete(input);
  }

  private confirmDelete(input: ConfirmationDataInput): void {
    this.modalService.init(ConfirmationModalComponent, input, {}).subscribe(result => {
      if (result) {
        const ids: string[] = this.selector.getSelectedItems().map(menu => menu._id);
        this.doDelete(ids);
      }
    });
  }

  private doDelete(ids: string[]): void {
    this.menuService.deleteMenu(ids).subscribe(
      () => {
        const successMessage: string = (ids.length === 1 ? 'Menu has' : `${ids.length} menus have`) + ' been deleted';
        this.alertService.addAlert(successMessage, 'SUCCESS');
        this.refresh();
      },
      () => this.alertService.addAlert(`Error deleting ${ids.length === 1 ? 'menu' : 'menus'}. Please try again later`, 'FAILURE'),
    );
  }

  private refresh(): void {
    this.menuService.getMenuList().subscribe(response => {
      this.menus = response;
      this.selector = new Selector(this.menus);
    });
  }
}

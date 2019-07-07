import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../../models';
import { Selector } from '../../../common/Selector';
import { MenuService } from '../../../services/menu.service';
import { ModalService } from '../../../services/modal.service';
import { ConfirmationDataInput, ConfirmationModalComponent } from '../../../common/modal/confirmation/confirmation-modal.component';
import { AlertsService } from '../../../services/alerts.service';
import { ChangeNameInput, ChangeNameModalComponent, ChangeNameOutput } from '../modal/change-name/change-name-modal.component';
import { noop } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent {

  menus: Menu[];
  totalMealsCount: number = 0;
  selector: Selector<Menu>;
  canDelete: boolean = false;
  canModify: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private menuService: MenuService,
      private modalService: ModalService,
      private alertService: AlertsService,
      private router: Router) {
    this.menus = this.route.snapshot.data['menus'];
    this.selector = new Selector<Menu>(this.menus);
    this.totalMealsCount = MenuListComponent.calculateTotalMealsCount(this.menus);
  }

  private static calculateTotalMealsCount(menus: Menu[]): number {
    return menus.map(value => value.foods.length)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  viewDetails(menu: Menu): void {
    if (menu.actions.viewDetails) {
      this.router.navigateByUrl(`/main/menu/details/${menu._id}`).then(noop);
    }
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

  changeName(): void {
    const input: ChangeNameInput = {
      title: 'Change menu name',
      inputPlaceholder: 'New menu name',
    };

    const emitter = new EventEmitter<string>();
    emitter.subscribe(name => this.doChangeName(name));

    const output: ChangeNameOutput = {
      nameChange: emitter,
    };

    this.modalService.init(ChangeNameModalComponent, input, output);
  }

  private doChangeName(name: string): void {
    const menuId: string = this.selector.getSelectedItems()[0]._id;
    this.menuService.changeName(menuId, name).subscribe(
      () => {
        this.alertService.addAlert('Menu name has been changed', 'SUCCESS');
        this.modalService.destroy(true);
        this.refresh();
      },
      () => this.alertService.addAlert('Error while changing menu name. Please try again later', 'FAILURE'),
    );
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

  private resolveActions(): void {
    const items = this.selector.getSelectedItems();
    this.canDelete = items.some(item => item.actions.delete);
    this.canModify = items.length === 1 && items[0].actions.modify;
  }
}

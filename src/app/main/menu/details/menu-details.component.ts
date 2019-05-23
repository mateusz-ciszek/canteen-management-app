import { Component, EventEmitter } from '@angular/core';
import { Food, Menu } from '../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Selector } from '../../../common/Selector';
import { ModalService } from '../../../services/modal.service';
import { ChangeNameInput, ChangeNameModalComponent, ChangeNameOutput } from '../modal/change-name/change-name-modal.component';
import { MenuService } from '../../../services/menu.service';
import { AlertsService } from '../../../services/alerts.service';
import { ConfirmationDataInput, ConfirmationModalComponent } from '../../../common/modal/confirmation/confirmation-modal.component';
import { noop } from 'rxjs';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.less']
})
export class MenuDetailsComponent {

  menu: Menu;
  selector: Selector<Food>;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private modalService: ModalService,
      private menuService: MenuService,
      private alertService: AlertsService) {

    this.menu = this.route.snapshot.data['menu'];
    this.selector = new Selector<Food>(this.menu.foods);
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

  delete(): void {
    const input: ConfirmationDataInput = {
      title: `Delete menu "${this.menu.name}"`,
      message: 'Are you sure you want to delete this menu?',
      confirmLabel: 'Delete',
      cancelLabel: 'Keep',
    };
    this.modalService.init(ConfirmationModalComponent, input, {}).subscribe(result => {
      if (result) {
        this.doDelete();
      }
    });
  }

  private doChangeName(name: string): void {
    this.menuService.changeName(this.menu._id, name).subscribe(
      () => {
        this.alertService.addAlert('Menu name has been changed', 'SUCCESS');
        this.modalService.destroy(true);
        this.menuService.getMenuDetails(this.menu._id).subscribe(data => this.menu = data);
      },
      () => this.alertService.addAlert('Error while changing menu name. Please try again later', 'FAILURE'),
    );
  }

  private doDelete(): void {
    this.menuService.deleteMenu([ this.menu._id ]).subscribe(
      () => {
        this.alertService.addAlert(`Menu "${this.menu.name}" has been deleted`, 'SUCCESS');
        this.router.navigateByUrl('/main/menu/list').then(noop);
      },
      () => this.alertService.addAlert('Error deleting menu. Please try again later', 'FAILURE'),
    );
  }
}

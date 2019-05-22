import { Component, EventEmitter } from '@angular/core';
import { Food, Menu } from '../../../models';
import { ActivatedRoute } from '@angular/router';
import { Selector } from '../../../common/Selector';
import { ModalService } from '../../../services/modal.service';
import { ChangeNameInput, ChangeNameModalComponent, ChangeNameOutput } from '../modal/change-name/change-name-modal.component';
import { MenuService } from '../../../services/menu.service';
import { AlertsService } from '../../../services/alerts.service';

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
}

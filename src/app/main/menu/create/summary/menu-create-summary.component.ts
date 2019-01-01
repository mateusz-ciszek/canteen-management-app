import { Component, Input } from '@angular/core';
import { CreateMenuModel } from '../../../../models';
import { ModalService } from '../../../../services/modal.service';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-menu-create-summary',
  templateUrl: './menu-create-summary.component.html',
  styleUrls: ['./menu-create-summary.component.less']
})
export class MenuCreateSummaryComponent {

  @Input()
  model: CreateMenuModel;

  constructor(private modalService: ModalService, private menuService: MenuService) {}

  close() {
    this.modalService.destroy(false);
  }

  saveMenu() {
    this.menuService.createMenu(this.model).subscribe(() => {
      this.modalService.destroy(true);
    });
  }

}

import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/modal.service';

@Component({
  selector: 'app-create-employee-summary-modal',
  templateUrl: './create-employee-summary-modal.component.html',
  styleUrls: ['./create-employee-summary-modal.component.less']
})
export class CreateEmployeeSummaryModalComponent {

  email: string;
  password: string;

  constructor(private modalService: ModalService) { }

  close() {
    this.modalService.destroy();
  }
}

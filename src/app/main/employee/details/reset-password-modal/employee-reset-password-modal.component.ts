import { Component } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { CreateEmployeeSummaryModalComponent } from '../../list/create/summary/create-employee-summary-modal.component';
import { WorkerService } from '../../../../services/worker.service';

@Component({
  selector: 'app-employee-reset-password-modal',
  templateUrl: './employee-reset-password-modal.component.html',
  styleUrls: ['./employee-reset-password-modal.component.less']
})
export class EmployeeResetPasswordModalComponent {

  model: ResetPasswordModel;

  constructor(private modalService: ModalService, private workerService: WorkerService) {}

  close() {
    this.modalService.destroy(false);
  }

  resetPassword() {
    this.workerService.resetPassword(this.model.workerId)
        .subscribe(response => this.modalService.init(CreateEmployeeSummaryModalComponent, response, {}));
  }
}

export interface ResetPasswordModel {
  workerId: string;
  firstName: string;
  lastName: string;
}

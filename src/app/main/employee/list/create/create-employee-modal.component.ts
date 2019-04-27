import { Component } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { WorkerService } from '../../../../services/worker.service';

@Component({
  selector: 'app-create-employee-modal',
  templateUrl: './create-employee-modal.component.html',
  styleUrls: ['./create-employee-modal.component.less']
})
export class CreateEmployeeModalComponent {

  model: CreateEmployeeModel = {
    firstName: '',
    lastName: '',
  };

  constructor(
    private modalService: ModalService,
    private workerService: WorkerService) {

  }

  close(): void {
    this.modalService.destroy();
  }

  createWorker(): void {
    this.workerService.createWorker(this.model).subscribe();
  }
}

interface CreateEmployeeModel {
  firstName: string;
  lastName: string;
}

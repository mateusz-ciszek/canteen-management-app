import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/modal.service';
import { saveAs } from 'file-saver';

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

  saveAsText() {
    const content = new Blob([`email: ${this.email}\npassword: ${this.password}`], { type: 'text/plain', endings: 'native' });
    const fileName = `USER_${new Date().toISOString()}.txt`;
    saveAs(content, fileName);
  }
}

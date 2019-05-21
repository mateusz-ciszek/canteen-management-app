import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.less'],
})
export class ConfirmationModalComponent {
  title: string = 'Confirm';
  message: string = 'Are you sure you want to do this?';
  confirmLabel: string = 'Confirm';
  cancelLabel: string = 'Cancel';

  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.destroy();
  }

  confirm() {
    this.modalService.destroy(true);
  }
}

export interface ConfirmationDataInput {
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

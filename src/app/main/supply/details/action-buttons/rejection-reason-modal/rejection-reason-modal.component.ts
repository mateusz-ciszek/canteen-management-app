import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../../../../services/modal.service';

@Component({
  selector: 'app-rejection-reason-modal',
  templateUrl: './rejection-reason-modal.component.html',
  styleUrls: ['./rejection-reason-modal.component.less'],
})
export class RejectionReasonModalComponent {

  header: string = 'Reject';
  reason: string = '';

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.destroy();
  }

  confirm() {
    this.change.emit(this.reason);
    this.modalService.destroy(true);
  }
}

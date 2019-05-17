import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupplyStateEnum } from '../../../../models';
import { SupplyService } from '../../../../services/supply.service';
import { AlertsService } from '../../../../services/alerts.service';
import { ModalService } from '../../../../services/modal.service';
import { RejectionReasonModalComponent } from './rejection-reason-modal/rejection-reason-modal.component';

@Component({
  selector: 'app-supply-details-action-buttons',
  templateUrl: './supply-details-action-buttons.component.html',
  styleUrls: ['./supply-details-action-buttons.component.less'],
})
export class SupplyDetailsActionButtonsComponent {

  @Input()
  state: SupplyStateEnum;

  @Input()
  supplyId: string;

  @Input()
  email: string;

  private cancellableStatesMap: SupplyStateEnum[] = ['ACCEPTED', 'PENDING', 'READY'];

  @Output()
  stateChange: EventEmitter<void> = new EventEmitter();

  constructor(
      private supplyService: SupplyService,
      private alertService: AlertsService,
      private modalService: ModalService) {

  }

  isCancellable(state: SupplyStateEnum): boolean {
    return this.cancellableStatesMap.includes(state);
  }

  changeState(state: SupplyStateEnum): void {

    if (state === 'REJECTED' || state === 'CANCELLED') {
      const input = {
        state,
        header: state === 'REJECTED' ? 'Reject request' : 'Cancel request',
      };
      const emitter = new EventEmitter<string>();
      emitter.subscribe(reason => this.doChangeState(state, reason));
      const output = { change: emitter };
      this.modalService.init(RejectionReasonModalComponent, input, output);
    } else {
      this.doChangeState(state);
    }
  }

  private doChangeState(state: SupplyStateEnum, reason?: string): void {
    this.supplyService.changeState(this.supplyId, state, reason).subscribe(
      () => {
        this.alertService.addAlert('Supply request state has been changed', 'SUCCESS');
        this.stateChange.emit();
      },
      () => this.alertService.addAlert('Error changing supply request state. Please try again later', 'FAILURE'),
    );
  }
}

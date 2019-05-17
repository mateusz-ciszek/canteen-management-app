import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupplyStateEnum } from '../../../../models';
import { SupplyService } from '../../../../services/supply.service';
import { AlertsService } from '../../../../services/alerts.service';

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

  constructor(private supplyService: SupplyService, private alertService: AlertsService) {}

  isCancellable(state: SupplyStateEnum): boolean {
    return this.cancellableStatesMap.includes(state);
  }

  changeState(state: SupplyStateEnum, reason?: string): void {
    this.supplyService.changeState(this.supplyId, state, reason).subscribe(
      () => {
        this.alertService.addAlert('Supply request state has been changed', 'SUCCESS');
        this.stateChange.emit();
      },
      () => this.alertService.addAlert('Error changing supply request state. Please try again later', 'FAILURE'),
    );
  }
}

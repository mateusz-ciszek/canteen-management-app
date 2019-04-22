import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DayOfMonth } from '../../../../common/util/calendar-util';
import { ModalService } from '../../../../services/modal.service';
import { DayOffModalComponent } from '../day-off-modal/day-off-modal.component';
import { WorkerService } from '../../../../services/worker.service';
import { AlertsService } from '../../../../services/alerts.service';
import { DayOffState } from '../../../../models';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.less']
})
export class ScheduleDetailsComponent {

  @Input()
  selectedDay: DayOfMonth;

  @Output()
  change: EventEmitter<void> = new EventEmitter();

  constructor(
    private modalService: ModalService,
    private workerService: WorkerService,
    private alertService: AlertsService) {}

  requestDaysOff(): void {
    this.modalService.init(DayOffModalComponent, {}, {});
  }

  acceptRequest(id: string) {
    this.changeRequest(id, 'APPROVED');
  }

  rejectRequest(id: string) {
    this.changeRequest(id, 'REJECTED');
  }

  private changeRequest(id: string, state: DayOffState): void {
    this.workerService.changeDayOffState(id, state).subscribe(
      () => {
        this.alertService.addAlert('Request state has been changed', 'SUCCESS');
        this.change.emit();
      },
      () => this.alertService.addAlert('Error changing request state. Try again later', 'FAILURE')
    );
  }
}

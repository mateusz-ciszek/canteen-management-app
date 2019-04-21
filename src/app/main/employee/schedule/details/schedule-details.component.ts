import { Component, Input } from '@angular/core';
import { DayOfMonth } from '../../../../common/util/calendar-util';
import { ModalService } from '../../../../services/modal.service';
import { DayOffModalComponent } from '../day-off-modal/day-off-modal.component';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.less']
})
export class ScheduleDetailsComponent {

  @Input()
  selectedDay: DayOfMonth;

  constructor(private modalService: ModalService) {}

  requestDaysOff(): void {
    this.modalService.init(DayOffModalComponent, {}, {});
  }

}

import { Component, Input } from '@angular/core';
import { DayOfMonth } from '../../../../common/util/calendar-util';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.less']
})
export class ScheduleDetailsComponent {

  @Input()
  selectedDay: DayOfMonth;

}

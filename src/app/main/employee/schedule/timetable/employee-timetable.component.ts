import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DayOfMonth, Month } from '../../../../common/util/calendar-util';

@Component({
  selector: 'app-employees-timetable',
  templateUrl: './employee-timetable.component.html',
  styleUrls: ['./employee-timetable.component.less']
})
export class EmployeeTimetableComponent {

  @Input()
  date: Date;

  @Input()
  day: DayOfMonth;

  @Input()
  month: Month;

  @Input()
  years: number[];

  @Output()
  selectionChanged: EventEmitter<DayOfMonth> = new EventEmitter<DayOfMonth>();

  @Output()
  monthChanged: EventEmitter<void> = new EventEmitter<void>();

}

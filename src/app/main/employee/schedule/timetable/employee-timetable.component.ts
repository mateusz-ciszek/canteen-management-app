import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DayOfMonth, Month } from '../../../../common/util/calendar-util';
import { DayData } from '../schedule.component';

@Component({
  selector: 'app-employees-timetable',
  templateUrl: './employee-timetable.component.html',
  styleUrls: ['./employee-timetable.component.less']
})
export class EmployeeTimetableComponent {

  @Input()
  date: Date;

  @Input()
  month: Month;

  @Input()
  selectedDay: DayOfMonth;

  @Input()
  years: number[];

  @Input()
  daysData: DayData[];

  @Output()
  selectionChanged: EventEmitter<DayOfMonth> = new EventEmitter<DayOfMonth>();

  @Output()
  monthChanged: EventEmitter<void> = new EventEmitter<void>();

}

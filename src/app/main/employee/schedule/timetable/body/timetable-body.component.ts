import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarUtil, DayOfMonth, Month } from '../../../../../common/util/calendar-util';
import { ArrayUtil } from '../../../../../common/util/array-util';

@Component({
  selector: 'app-timetable-body',
  templateUrl: './timetable-body.component.html',
  styleUrls: ['./timetable-body.component.less']
})
export class TimetableBodyComponent implements OnInit {

  @Input()
  month: Month;

  private selectedDay: DayOfMonth;

  @Output()
  daySelectionChange: EventEmitter<DayOfMonth> = new EventEmitter();

  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  dayAbbreviations: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  ngOnInit(): void {
    this.selectedDay = ArrayUtil.flatMap(this.month.weeks, week => week.days).find(day => CalendarUtil.isToday(day.date));
    this.selectedDay.isSelected = true;
  }

  changeSelection(day: DayOfMonth): void {
    this.selectedDay.isSelected = false;
    this.selectedDay = day;
    this.selectedDay.isSelected = true;
    this.daySelectionChange.emit(this.selectedDay);
  }
}

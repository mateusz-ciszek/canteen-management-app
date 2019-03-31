import { Component, Input } from '@angular/core';
import { DayOfMonth, Month } from '../../../../../common/util/calendar-util';
import { DayData } from '../../schedule.component';

@Component({
  selector: 'app-timetable-body',
  templateUrl: './timetable-body.component.html',
  styleUrls: ['./timetable-body.component.less']
})
export class TimetableBodyComponent {

  @Input()
  month: Month;

  @Input()
  selectedDay: DayOfMonth;

  @Input()
  daysData: DayData[];

  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  changeSelection(day: DayOfMonth): void {
    this.selectedDay.date = day.date;
  }

  isSelected(day: DayOfMonth): boolean {
    return day.date.setHours(0, 0, 0, 0) === this.selectedDay.date.setHours(0, 0, 0, 0);
  }
}

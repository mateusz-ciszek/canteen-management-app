import { Component, OnInit } from '@angular/core';
import { CalendarUtil, DayOfMonth, Month } from '../../../common/util/calendar-util';
import { ActivatedRoute } from '@angular/router';
import { ArrayUtil } from '../../../common/util/array-util';
import { MonthResponse } from '../../../models';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
})
export class ScheduleComponent implements OnInit {

  YEARS: number[] = [];

  date: Date = new Date();
  month: Month;
  selectedDay: DayOfMonth;

  constructor(private route: ActivatedRoute) {

    this.month = CalendarUtil.getMonth(this.date.getMonth(), this.date.getFullYear());
    this.selectedDay = this.findTodayInMonth();
    this.selectedDay.isSelected = true;
    this.initAllowedYears();
  }

  ngOnInit(): void {
    this.assignSnapshotData();
  }

  updateMonth(): void {
    this.month = CalendarUtil.getMonth(this.date.getMonth(), this.date.getFullYear());
  }

  daySelectionChange(day: DayOfMonth) {
    this.selectedDay = day;
  }

  private findTodayInMonth(): DayOfMonth {
    return ArrayUtil.flatMap(this.month.weeks, week => week.days).find(day => CalendarUtil.isToday(day.date));
  }

  private initAllowedYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 10; year < currentYear + 10; ++year) {
      this.YEARS.push(year);
    }
  }

  private assignSnapshotData(): void {
    const response: MonthResponse = this.route.snapshot.data['month'];
    const monthDetails = response.weeks.reduce((accumulated, currentValue) => ({ ...accumulated, ...currentValue }), {});
    this.month.weeks.forEach(week => week.days.forEach(day => day.details = monthDetails[day.date.toISOString()]));
  }
}

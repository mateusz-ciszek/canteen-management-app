import { Component, OnInit } from '@angular/core';
import { CalendarUtil, DayOfMonth, Month } from '../../../common/util/calendar-util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
})
export class ScheduleComponent implements OnInit {

  YEARS: number[] = [];

  workers: Worker[];
  date: Date = new Date();
  month: Month;
  selectedDay: DayOfMonth;

  constructor(private route: ActivatedRoute) {
    this.updateMonth();
    this.selectedDay = { date: this.findTodayInMonth().date, belongsToMonth: false };
    this.initAllowedYears();
  }

  ngOnInit(): void {
    this.workers = this.route.snapshot.data['workers'];
  }

  updateMonth(): void {
    this.month = CalendarUtil.getMonth(this.date.getMonth(), this.date.getFullYear());
  }

  private findTodayInMonth(): DayOfMonth {
    for (const week of this.month.weeks) {
      for (const day of week.days) {
        if (CalendarUtil.isToday(day.date)) {
          return day;
        }
      }
    }
    return null;
  }

  private initAllowedYears(): void {
    for (let year = 2000; year < 2099; ++year) {
      this.YEARS.push(year);
    }
  }

}

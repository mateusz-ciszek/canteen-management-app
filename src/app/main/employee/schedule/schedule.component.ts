import { Component, OnInit } from '@angular/core';
import { CalendarUtil, DayOfMonth, Month } from '../../../common/util/calendar-util';
import { ActivatedRoute } from '@angular/router';
import { WorkDay, Worker } from '../../../models';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
})
export class ScheduleComponent implements OnInit {

  YEARS: number[] = [];

  workers: Worker[];
  daysData: DayData[];
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
    this.daysData = this.calculateDefaultsForDays();
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

  private calculateDefaultsForDays(): DayData[] {
    const daysNumbers = [0, 1, 2, 3, 4, 5, 6];
    const daysData: DayData[] = daysNumbers.map(() => ({ people: [] }));

    this.workers.forEach(worker => {
      daysNumbers.forEach(dayNumber => {
        if (this.isWorking(worker.defaultWorkHours[dayNumber])) {
          daysData[dayNumber].people.push(worker);
        }
      });
    });

    return daysData;
  }

  private isWorking(workDay: WorkDay): boolean {
    return workDay.endHour > workDay.startHour;
  }
}

export interface DayData {
  people: Worker[];
}

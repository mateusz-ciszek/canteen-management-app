import { Component, OnInit } from '@angular/core';
import { CalendarUtil, DayOfMonth, Month } from '../../../common/util/calendar-util';
import { ActivatedRoute } from '@angular/router';
import { ArrayUtil } from '../../../common/util/array-util';
import { WorkerService } from '../../../services/worker.service';

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

  constructor(
      private route: ActivatedRoute,
      private workerService: WorkerService,
    ) {

    this.month = CalendarUtil.getMonth(this.date.getMonth(), this.date.getFullYear());
    this.selectedDay = this.findTodayInMonth();
    this.selectedDay.isSelected = true;
    this.initAllowedYears();
  }

  ngOnInit(): void {
    this.updateMonth();
  }

  updateMonth(): void {
    const month = CalendarUtil.getMonth(this.date.getMonth(), this.date.getFullYear());
    this.workerService.getMonth(this.date.getFullYear(), this.date.getMonth()).subscribe(response => {
      const monthDetails = response.weeks.reduce((accumulated, currentValue) => ({ ...accumulated, ...currentValue }), {});
      month.weeks.forEach(week => week.days.forEach(day => day.details = monthDetails[day.date.toISOString()]));
      this.month = month;
      this.updateSelectedDay();
    });
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

  private updateSelectedDay(): void {
    const previouslySelectedDay = ArrayUtil.flatMap(this.month.weeks, week => week.days)
        .find(day => CalendarUtil.dateEquals(day.date, this.selectedDay.date));
    if (previouslySelectedDay) {
      this.selectedDay.isSelected = false;
      this.selectedDay = previouslySelectedDay;
      this.selectedDay.isSelected = true;
    }
  }
}

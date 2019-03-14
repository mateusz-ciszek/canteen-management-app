import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarUtil, MONTH_NAMES } from '../../../../../common/util/calendar-util';

@Component({
  selector: 'app-timetable-header',
  templateUrl: './timetable-header.component.html',
  styleUrls: ['./timetable-header.component.less']
})
export class TimetableHeaderComponent implements OnInit {

  @Input()
  date: Date;

  @Input()
  years: number[];

  @Input()

  monthNames = MONTH_NAMES;

  @Output()
  onMonthChanged: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    if (!this.years || this.years.length === 0) {
      this.years = [CalendarUtil.getCurrentYear()];
    }
    this.years.sort((a, b) => a - b);
  }

  setMonth(monthNumber: number): void {
    this.date.setMonth(monthNumber);
    this.onMonthChanged.emit();
  }

  setYear(year: number) {
    this.date.setFullYear(year);
    this.onMonthChanged.emit();
  }

  setPreviousMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.onMonthChanged.emit();
  }

  setNextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.onMonthChanged.emit();
  }

  canSetPreviousMonth(): boolean {
    return this.date.getMonth() === 0 && this.date.getFullYear() === this.years[0];
  }

  canSetNextMonth(): boolean {
    return this.date.getMonth() === 11 && this.date.getFullYear() === this.years[this.years.length - 1];
  }

}

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

  monthNames = MONTH_NAMES;

  @Output()
  monthChanged: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    if (!this.years || this.years.length === 0) {
      this.years = [CalendarUtil.getCurrentYear()];
    }
    this.years.sort((a, b) => a - b);
  }

  setMonth(monthNumber: number): void {
    this.date.setMonth(monthNumber);
    this.monthChanged.emit();
  }

  setYear(year: number) {
    this.date.setFullYear(year);
    this.monthChanged.emit();
  }

  setPreviousMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.monthChanged.emit();
  }

  setNextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.monthChanged.emit();
  }

  canSetPreviousMonth(): boolean {
    return this.date.getMonth() === 0 && this.date.getFullYear() === this.years[0];
  }

  canSetNextMonth(): boolean {
    return this.date.getMonth() === 11 && this.date.getFullYear() === this.years[this.years.length - 1];
  }

}

import { Component } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { CalendarUtil, DayOfMonth, Month, MONTH_NAMES } from '../../../../common/util/calendar-util';
import { WorkerService } from '../../../../services/worker.service';

@Component({
  selector: 'app-day-off-modal',
  templateUrl: './day-off-modal.component.html',
  styleUrls: ['./day-off-modal.component.less']
})
export class DayOffModalComponent {

  readonly monthNames = MONTH_NAMES;
  readonly dayNameAbbreviation = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  month: Month;
  selected: DayOfMonth[] = [];

  private date: Date = new Date();

  constructor(private modalService: ModalService, private workerService: WorkerService) {
    this.month = CalendarUtil.getMonth();
  }

  close(): void {
    this.modalService.destroy();
  }

  nextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.month = this.generateMonth();
  }

  previousMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.month = this.generateMonth();
  }

  changeSelection(day: DayOfMonth): void {
    if (this.isBeforeToday(day.date)) {
      return;
    }

    if (this.isSelected(day)) {
      this.selected.splice(this.selected.indexOf(this.findDayWithDate(day.date)), 1);
    } else {
      this.selected.push(day);
    }
  }

  makeRequest(): void {
    this.workerService.requestDaysOff(this.selected.map(day => day.date))
        .subscribe(() => this.modalService.destroy(true));
  }

  isSelected(day: DayOfMonth): boolean {
    return !!this.findDayWithDate(day.date);
  }

  isBeforeToday(date: Date) {
    const today = new Date();
    return date < today;
  }

  private findDayWithDate(date: Date): DayOfMonth {
    return this.selected.find(day => CalendarUtil.dateEquals(day.date, date));
  }

  private generateMonth(): Month {
    return CalendarUtil.getMonth(this.date.getMonth(), this.date.getFullYear());
  }
}

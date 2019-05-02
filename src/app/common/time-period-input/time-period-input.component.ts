import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-time-period-input',
  templateUrl: './time-period-input.component.html',
  styleUrls: ['./time-period-input.component.less'],
})
export class TimePeriodInputComponent implements OnInit {

  @Input()
  timePeriod: TimePeriodModel = { from: '', to: '' };

  valid: boolean = false;
  showValidationErrors: boolean = false;
  private properValue: boolean = false;

  @Output()
  timePeriodChange: EventEmitter<TimePeriodModel> = new EventEmitter();

  @Output()
  validationChange: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('periodStart')
  periodStartInput: NgModel;

  @ViewChild('periodEnd')
  periodEndInput: NgModel;

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    this.valid = this.checkValidity();
    this.validationChange.emit(this.valid);
    this.timePeriodChange.emit(this.timePeriod);
    this.showValidationErrors = this.properValue || ((this.periodStartInput.dirty || this.periodStartInput.touched)
      && (this.periodEndInput.dirty || this.periodEndInput.touched));
  }

  private checkValidity(): boolean {
    this.properValue = this.matchesTimeString(this.timePeriod.from) && this.matchesTimeString(this.timePeriod.to);
    if (!this.properValue) {
      return false;
    }

    const [startHour, startMinute, endHour, endMinute]: number[] = `${this.timePeriod.from}:${this.timePeriod.to}`.split(':').map(Number);
    if (startHour > endHour) {
      return false;
    }

    if (startHour === endHour && startMinute > endMinute) {
      return false;
    }

    return true;
  }

  private matchesTimeString(testString: string): boolean {
    const match = new RegExp('^[0-9]{2}:[0-9]{2}$');
    return match.test(testString);
  }
}

export interface TimePeriodModel {
  from: string;
  to: string;
}

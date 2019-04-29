import { Component } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { WorkerService } from '../../../../services/worker.service';
import { DAY_NAMES } from '../../../../common/util/calendar-util';
import { TimePeriodModel } from '../../../../common/time-period-input/time-period-input.component';
import { WorkerCreateRequest, WorkHoursCreateRequest } from '../../../../models';

@Component({
  selector: 'app-create-employee-modal',
  templateUrl: './create-employee-modal.component.html',
  styleUrls: ['./create-employee-modal.component.less']
})
export class CreateEmployeeModalComponent {

  model: WorkerCreateRequest = {
    firstName: '',
    lastName: '',
  };
  customWorkingDays: boolean = false;
  workingDays: TimePeriodModel[] = [];
  dayNames: string[] = [...DAY_NAMES];
  timePeriodValidation: boolean[] = [false, false, false, false, false, false, false];

  constructor(
      private modalService: ModalService,
      private workerService: WorkerService) {

    this.workingDays = this.initDefaultWorkingDays();
  }

  close(): void {
    this.modalService.destroy();
  }

  createWorker(): void {
    this.model.workHours = this.workingDays.map(this.mapTimeStringToWorkHousrsCreateRequest);
    this.workerService.createWorker(this.model).subscribe();
  }

  workDayValidationChange(index: number, validation: boolean): void {
    this.timePeriodValidation[index] = validation;
  }

  isFormValid(): boolean {
    return this.customWorkingDays ? this.timePeriodValidation.every(Boolean) : true;
  }

  private mapTimeStringToWorkHousrsCreateRequest(value: TimePeriodModel, day: number): WorkHoursCreateRequest {
    const start = value.from.split(':');
    const end = value.to.split(':');

    return {
      dayOfTheWeek: day,
      start: { hour: +start[0], minute: +start[1] },
      end: { hour: +end[0], minute: +end[1] },
    };
  }

  private initDefaultWorkingDays(): TimePeriodModel[] {
    const workHours: TimePeriodModel[] = [];
    for (let i = 0; i < 5; ++i) {
      workHours.push({
        from: '08:00',
        to: '16:00',
      });
    }
    for (let i = 5; i < 7; ++i) {
      workHours.push({
        from: '00:00',
        to: '00:00',
      });
    }
    return workHours;
  }
}

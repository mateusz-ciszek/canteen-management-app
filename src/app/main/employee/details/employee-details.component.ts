import { Component, OnInit } from '@angular/core';
import { WorkerDetailsResponse } from '../../../models';
import { DAY_NAMES } from '../../../common/util/calendar-util';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../services/modal.service';
import { EmployeeResetPasswordModalComponent, ResetPasswordModel } from './reset-password-modal/employee-reset-password-modal.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {

  readonly DATE_FORMAT = 'dd.MM.yyyy';
  readonly TIME_FORMAT = 'HH:mm';

  model: WorkerDetailsResponse;
  workerId: string;
  dayNames = DAY_NAMES;

  constructor(private route: ActivatedRoute, private modalService: ModalService) {}

  ngOnInit(): void {
    this.model = this.route.snapshot.data['worker'];
    this.workerId = this.route.snapshot.params['employeeId'];
  }

  resetPassword() {
    const model: ResetPasswordModel = {
      workerId: this.workerId,
      firstName: this.model.person.firstName,
      lastName: this.model.person.lastName,
    };
    this.modalService.init(EmployeeResetPasswordModalComponent, { model }, {});
  }
}

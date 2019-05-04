import { Component, OnInit } from '@angular/core';
import { WorkerDetailsResponse } from '../../../models';
import { DAY_NAMES } from '../../../common/util/calendar-util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {

  readonly DATE_FORMAT = 'dd.MM.yyyy';
  readonly TIME_FORMAT = 'HH:mm';

  model: WorkerDetailsResponse;
  dayNames = DAY_NAMES;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.model = this.route.snapshot.data['worker'];
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerListItem } from '../../../models';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  workers: WorkerListItem[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.workers = this.route.snapshot.data['workers'];
  }

}

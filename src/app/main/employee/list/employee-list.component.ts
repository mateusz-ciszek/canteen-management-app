import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerListItem } from '../../../models';
import { ModalService } from '../../../services/modal.service';
import { CreateEmployeeModalComponent } from './create/create-employee-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  workers: WorkerListItem[];

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService) {

  }

  ngOnInit(): void {
    this.workers = this.route.snapshot.data['workers'];
  }

  createWorker() {
    this.modalService.init(CreateEmployeeModalComponent, {}, {});
  }

}

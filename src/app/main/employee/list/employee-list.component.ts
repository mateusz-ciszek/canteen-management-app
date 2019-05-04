import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerListItem } from '../../../models';
import { ModalService } from '../../../services/modal.service';
import { CreateEmployeeModalComponent } from './create/create-employee-modal.component';
import { noop } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  workers: WorkerListItem[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService) {

  }

  ngOnInit(): void {
    this.workers = this.route.snapshot.data['workers'];
  }

  createWorker() {
    this.modalService.init(CreateEmployeeModalComponent, {}, {});
  }

  showDetails(employeeId: string): void {
    this.router.navigateByUrl(`main/employees/${employeeId}/details`).then(noop);
  }
}

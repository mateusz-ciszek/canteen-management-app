import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { WorkerDetailsResponse } from '../../../models';
import { Observable } from 'rxjs';
import { WorkerService } from '../../../services/worker.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeDetailsResolver implements Resolve<WorkerDetailsResponse> {

  constructor(private workerService: WorkerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorkerDetailsResponse> {
    const workerId: string = route.params['employeeId'];
    return this.workerService.getWorkerDetails(workerId);
  }
}

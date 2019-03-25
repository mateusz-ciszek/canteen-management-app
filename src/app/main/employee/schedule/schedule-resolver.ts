import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkerService } from '../../../services/worker.service';
import { Worker } from '../../../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleResolver implements Resolve<Worker[]> {
  constructor(private workerService: WorkerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Worker[]> | Promise<Worker[]> | Worker[] {
    return this.workerService.getAllWorkers();
  }
}

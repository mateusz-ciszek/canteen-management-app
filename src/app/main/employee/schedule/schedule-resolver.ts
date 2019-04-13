import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkerService } from '../../../services/worker.service';
import { Injectable } from '@angular/core';
import { MonthResponse } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class ScheduleResolver implements Resolve<MonthResponse> {
  constructor(private workerService: WorkerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MonthResponse> | Promise<MonthResponse> | MonthResponse {
    return this.workerService.getMonth();
  }
}

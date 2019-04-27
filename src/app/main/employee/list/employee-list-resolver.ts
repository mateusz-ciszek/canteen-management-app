import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkerService } from '../../../services/worker.service';
import { Injectable } from '@angular/core';
import { WorkerListItem } from '../../../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListResolver implements Resolve<any> {

  constructor(private workerService: WorkerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorkerListItem[]> {
    return this.workerService.getWorkers().pipe(
      map(response => response.workers),
    );
  }
}

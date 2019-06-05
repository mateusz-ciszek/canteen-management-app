import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Permission } from '../../../permission';
import { WorkerService } from '../../../services/worker.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeePermissionsResolver implements Resolve<Permission[]> {
  constructor(private workerService: WorkerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Permission[]> | Promise<Permission[]> | Permission[] {
    const workerId: string = route.params['employeeId'];
    return this.workerService.getPermissions(workerId);
  }
}

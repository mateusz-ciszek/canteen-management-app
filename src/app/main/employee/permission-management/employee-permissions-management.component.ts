import { Component } from '@angular/core';
import { MODULE_PERMISSIONS, ModulePermissions } from './PermissionViewMap';
import { Worker } from '../../../models';
import { ActivatedRoute } from '@angular/router';
import { Permission } from '../../../permission';
import { WorkerService } from '../../../services/worker.service';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-employee-permissions-management',
  templateUrl: './employee-permissions-management.component.html',
  styleUrls: ['./employee-permissions-management.component.less']
})
export class EmployeePermissionsManagementComponent {

  permissions: ModulePermissions[] = [...MODULE_PERMISSIONS];
  employee: Worker;
  employeePermissions: Permission[];

  constructor(
      route: ActivatedRoute,
      private workerService: WorkerService,
      private alertService: AlertsService) {

    this.employee = route.snapshot.data['employee'];
    this.employeePermissions = route.snapshot.data['permissions'];

    this.resetPermissions();
  }

  resetPermissions(): void {
    this.permissions.forEach(modulePermission => {
      modulePermission.mainPermission.selected = this.employeePermissions.includes(modulePermission.mainPermission.code);
      modulePermission.subPermissions
        .forEach(subPermission => subPermission.selected = this.employeePermissions.includes(subPermission.code));
    });
  }

  savePermissions(): void {
    const newPermissions: Permission[] = [ ...this.permissions.map(permission => permission.mainPermission) ]
        .concat(...this.permissions.map(permission => permission.subPermissions))
        .filter(view => view.selected)
        .map(view => view.code);
    this.workerService.savePermissions(this.employee.id, newPermissions).subscribe(
      () => this.alertService.addAlert('Permissions have been saved', 'SUCCESS'),
      () => this.alertService.addAlert('Error saving permissions. Please try again later', 'FAILURE'),
    );
  }
}

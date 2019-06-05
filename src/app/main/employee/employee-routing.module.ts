import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeeListComponent } from './list/employee-list.component';
import { EmployeeListResolver } from './list/employee-list-resolver';
import { EmployeeDetailsComponent } from './details/employee-details.component';
import { EmployeeDetailsResolver } from './details/employee-details-resolver';
import { EmployeePermissionsManagementComponent } from './permission-management/employee-permissions-management.component';
import { EmployeePermissionsResolver } from './permission-management/employee-permissions-resolver';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: 'timetable', pathMatch: 'full' },
    { path: 'timetable', component: ScheduleComponent },
    { path: 'list', component: EmployeeListComponent, resolve: { workers: EmployeeListResolver } },
    {
      path: ':employeeId',
      children: [
        { path: 'details', component: EmployeeDetailsComponent, resolve: { worker: EmployeeDetailsResolver } },
        {
          path: 'permissions',
          component: EmployeePermissionsManagementComponent,
          resolve: { permissions: EmployeePermissionsResolver, employee: EmployeeDetailsResolver },
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EmployeeRoutingModule {}

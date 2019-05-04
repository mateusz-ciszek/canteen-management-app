import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeeListComponent } from './list/employee-list.component';
import { EmployeeListResolver } from './list/employee-list-resolver';
import { EmployeeDetailsComponent } from './details/employee-details.component';
import { EmployeeDetailsResolver } from './details/employee-details-resolver';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: 'timetable', pathMatch: 'full' },
    { path: 'timetable', component: ScheduleComponent },
    { path: 'list', component: EmployeeListComponent, resolve: { workers: EmployeeListResolver } },
    { path: ':employeeId/details', component: EmployeeDetailsComponent, resolve: { worker: EmployeeDetailsResolver } },
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

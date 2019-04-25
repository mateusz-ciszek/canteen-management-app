import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeeListComponent } from './list/employee-list.component';
import { EmployeeListResolver } from './list/employee-list-resolver';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: 'timetable', pathMatch: 'full' },
    { path: 'timetable', component: ScheduleComponent },
    { path: 'list', component: EmployeeListComponent, resolve: { workers: EmployeeListResolver } },
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

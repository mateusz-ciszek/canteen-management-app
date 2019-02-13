import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimetableComponent } from './timetable/employee-timetable.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: 'timetable', pathMatch: 'full' },
    { path: 'timetable', component: EmployeeTimetableComponent },
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

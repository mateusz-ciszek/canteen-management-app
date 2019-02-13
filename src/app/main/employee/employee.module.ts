import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeTimetableComponent } from './timetable/employee-timetable.component';
import { EmployeeComponentsSwitcherComponent } from './common/employee-components-switcher/employee-components-switcher.component';

@NgModule({
  declarations: [
    EmployeeComponentsSwitcherComponent,
    EmployeeTimetableComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ],
})
export class EmployeeModule {}

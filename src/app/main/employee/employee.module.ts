import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeTimetableComponent } from './schedule/timetable/employee-timetable.component';
import { EmployeeComponentsSwitcherComponent } from './common/employee-components-switcher/employee-components-switcher.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SharedModule } from '../../common/shared.module';
import { TimetableHeaderComponent } from './schedule/timetable/header/timetable-header.component';
import { TimetableBodyComponent } from './schedule/timetable/body/timetable-body.component';
import { ScheduleDetailsComponent } from './schedule/details/schedule-details.component';

@NgModule({
  declarations: [
    EmployeeComponentsSwitcherComponent,
    EmployeeTimetableComponent,
    ScheduleComponent,
    TimetableHeaderComponent,
    TimetableBodyComponent,
    ScheduleDetailsComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
  ],
})
export class EmployeeModule {}
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
import { EmployeeListComponent } from './list/employee-list.component';

@NgModule({
  declarations: [
    EmployeeComponentsSwitcherComponent,
    EmployeeListComponent,
    EmployeeTimetableComponent,
    ScheduleComponent,
    ScheduleDetailsComponent,
    TimetableHeaderComponent,
    TimetableBodyComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
  ],
})
export class EmployeeModule {}

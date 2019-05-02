import { ComponentFactoryResolver, NgModule } from '@angular/core';
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
import { CreateEmployeeModalComponent } from './list/create/create-employee-modal.component';
import { CoalescingComponentFactoryResolver } from '../../services/coalescing-component-factory-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeeSummaryModalComponent } from './list/create/summary/create-employee-summary-modal.component';

@NgModule({
  declarations: [
    EmployeeComponentsSwitcherComponent,
    EmployeeListComponent,
    EmployeeTimetableComponent,
    ScheduleComponent,
    ScheduleDetailsComponent,
    TimetableHeaderComponent,
    TimetableBodyComponent,
    CreateEmployeeModalComponent,
    CreateEmployeeSummaryModalComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CreateEmployeeModalComponent,
    CreateEmployeeSummaryModalComponent,
  ]
})
export class EmployeeModule {
  constructor(
      coalescingResolver: CoalescingComponentFactoryResolver,
      localResolver: ComponentFactoryResolver) {

    coalescingResolver.registerResolver(localResolver);
  }
}

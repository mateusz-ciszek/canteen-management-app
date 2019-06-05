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
import { EmployeeDetailsComponent } from './details/employee-details.component';
import { EmployeeDetailsResolver } from './details/employee-details-resolver';
import { EmployeeResetPasswordModalComponent } from './details/reset-password-modal/employee-reset-password-modal.component';
import { EmployeePermissionsManagementComponent } from './permission-management/employee-permissions-management.component';
import { EmployeePermissionsResolver } from './permission-management/employee-permissions-resolver';
import { WorkerService } from '../../services/worker.service';
import { EmployeeListResolver } from './list/employee-list-resolver';

@NgModule({
  declarations: [
    CreateEmployeeModalComponent,
    CreateEmployeeSummaryModalComponent,
    EmployeeComponentsSwitcherComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeResetPasswordModalComponent,
    EmployeeTimetableComponent,
    ScheduleComponent,
    ScheduleDetailsComponent,
    TimetableBodyComponent,
    TimetableHeaderComponent,
    EmployeePermissionsManagementComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  entryComponents: [
    CreateEmployeeModalComponent,
    CreateEmployeeSummaryModalComponent,
    EmployeeResetPasswordModalComponent,
  ],
  providers: [
    EmployeeDetailsResolver,
    EmployeeListResolver,
    EmployeePermissionsResolver,
    WorkerService,
  ],
})
export class EmployeeModule {
  constructor(
      coalescingResolver: CoalescingComponentFactoryResolver,
      localResolver: ComponentFactoryResolver) {

    coalescingResolver.registerResolver(localResolver);
  }
}

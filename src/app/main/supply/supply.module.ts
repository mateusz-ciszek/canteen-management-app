import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyListComponent } from './list/supply-list.component';
import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyPageableListService } from '../../services/pageable-list/supply-pageable-list.service';
import { SupplyListTableComponent } from './list/table/supply-list-table.component';
import { SharedModule } from '../../common/shared.module';
import { FormsModule } from '@angular/forms';
import { SupplyDetailsComponent } from './details/supply-details.component';
import { SupplyDetailsResolver } from './details/supply-details-resolver';
import { SupplyStateBadgeComponent } from './control/supply-state-badge/supply-state-badge.component';
import { SupplyDetailsActionButtonsComponent } from './details/action-buttons/supply-details-action-buttons.component';
import { RejectionReasonModalComponent } from './details/action-buttons/rejection-reason-modal/rejection-reason-modal.component';
import { CoalescingComponentFactoryResolver } from '../../services/coalescing-component-factory-resolver.service';

@NgModule({
  declarations: [
    RejectionReasonModalComponent,
    SupplyDetailsActionButtonsComponent,
    SupplyDetailsComponent,
    SupplyListComponent,
    SupplyListTableComponent,
    SupplyStateBadgeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SupplyRoutingModule,
  ],
  providers: [
    SupplyDetailsResolver,
    SupplyPageableListService,
  ],
  entryComponents: [
    RejectionReasonModalComponent,
  ],
})
export class SupplyModule {
  constructor(
      coalescingResolver: CoalescingComponentFactoryResolver,
      localResolver: ComponentFactoryResolver) {

    coalescingResolver.registerResolver(localResolver);
  }
}

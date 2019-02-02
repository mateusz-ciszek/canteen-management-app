import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './details/order-details.component';
import { OrdersListComponent } from './list/orders-list.component';
import { OrderHistoryComponent } from './control/order-history/order-history.component';
import { OrderHistoryStateComponent } from './control/order-history/state/details/order-history-state.component';
import { OrderHistorySelectorComponent } from './control/order-history/state/selector/order-history-selector.component';
import { OrderStateBadgeComponent } from './control/order-state-badge/order-state-badge.component';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrdersListComponent,
    OrderHistoryComponent,
    OrderHistoryStateComponent,
    OrderHistorySelectorComponent,
    OrderStateBadgeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
})
export class OrderModule { }

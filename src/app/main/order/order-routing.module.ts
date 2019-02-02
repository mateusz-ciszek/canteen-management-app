import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './list/orders-list.component';
import { OrdersListResolver } from './list/orders-list-resolver';
import { OrderDetailsComponent } from './details/order-details.component';
import { OrderDetailsResolver } from './details/order-details-resolver';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OrdersListComponent, resolve: { orders: OrdersListResolver } },
      { path: 'details/:orderId', component: OrderDetailsComponent, resolve: { order: OrderDetailsResolver } },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class OrderRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuListComponent } from './main/menu/list/menu-list.component';
import { CanActivateMainGuard } from './services/guard/can-activate-main.guard';
import { MenuListResolver } from './main/menu/list/menu-list-resolver';
import { MenuDetailsComponent } from './main/menu/details/menu-details.component';
import { MenuDetailsResolver } from './main/menu/details/menu-details-resolver';
import { FoodDetailsComponent } from './main/menu/food/detail/food-details.component';
import { FoodDetailsResolver } from './main/menu/food/detail/food-details-resolver';
import { MenuCreateComponent } from './main/menu/create/menu-create.component';
import { OrdersListComponent } from './main/order/list/orders-list.component';
import { OrdersListResolver } from './main/order/list/orders-list-resolver';
import { OrderDetailsComponent } from './main/order/details/order-details.component';
import { OrderDetailsResolver } from './main/order/details/order-details-resolver';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'create', component: MenuCreateComponent },
          { path: 'list', component: MenuListComponent, resolve: { menus: MenuListResolver } },
          { path: 'details/:menuId', component: MenuDetailsComponent, resolve: { menu: MenuDetailsResolver } },
          { path: ':menuId/food/details/:foodId', component: FoodDetailsComponent, resolve: { food: FoodDetailsResolver } },
          { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
      },
      {
        path: 'order',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: OrdersListComponent, resolve: { orders: OrdersListResolver } },
          { path: 'details/:orderId', component: OrderDetailsComponent, resolve: { order: OrderDetailsResolver } },
          { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
      },
      { path: '**', redirectTo: 'menu', pathMatch: 'full' },
    ],
    canActivate: [CanActivateMainGuard],
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}

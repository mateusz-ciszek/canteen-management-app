import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanActivateMainGuard } from './services/guard/can-activate-main.guard';
import { OrderModule } from './main/order/order.module';
import { MenuModule } from './main/menu/menu.module';
import { EmployeeModule } from './main/employee/employee.module';
import { SupplyModule } from './main/supply/supply.module';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', loadChildren: () => MenuModule },
      { path: 'order', loadChildren: () => OrderModule },
      { path: 'employees', loadChildren: () => EmployeeModule },
      { path: 'supply', loadChildren: () => SupplyModule },
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

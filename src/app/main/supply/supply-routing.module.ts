import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupplyListComponent } from './list/supply-list.component';
import { SupplyDetailsComponent } from './details/supply-details.component';
import { SupplyDetailsResolver } from './details/supply-details-resolver';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: SupplyListComponent },
    { path: 'details/:supplyId', component: SupplyDetailsComponent, resolve: { supply: SupplyDetailsResolver } },
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SupplyRoutingModule {}

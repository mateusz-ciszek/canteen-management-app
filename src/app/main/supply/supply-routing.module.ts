import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupplyListComponent } from './list/supply-list.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: SupplyListComponent },
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

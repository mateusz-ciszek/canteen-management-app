import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuListComponent } from './list/menu-list.component';
import { MenuListResolver } from './list/menu-list-resolver';
import { MenuDetailsComponent } from './details/menu-details.component';
import { MenuDetailsResolver } from './details/menu-details-resolver';
import { FoodDetailsComponent } from './food/detail/food-details.component';
import { FoodDetailsResolver } from './food/detail/food-details-resolver';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'create', component: MenuCreateComponent },
      { path: 'list', component: MenuListComponent, resolve: { menus: MenuListResolver } },
      { path: 'details/:menuId', component: MenuDetailsComponent, resolve: { menu: MenuDetailsResolver } },
      { path: ':menuId/food/details/:foodId', component: FoodDetailsComponent, resolve: { food: FoodDetailsResolver } },
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
export class MenuRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuListComponent } from './list/menu-list.component';
import { MenuListResolver } from './list/menu-list-resolver';
import { MenuDetailsComponent } from './details/menu-details.component';
import { MenuDetailsResolver } from './details/menu-details-resolver';
import { FoodDetailsComponent } from './food/details/food-details.component';
import { FoodDetailsResolver } from './food/details/food-details-resolver';
import { CommonModule } from '@angular/common';
import { FoodCreateComponent } from './food/create/food-create.component';
import { MenuConfigResolver } from './menu-config-resolver';
import { MenuCreateGuard } from './create/menu-create.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'create', component: MenuCreateComponent, canActivate: [ MenuCreateGuard ] },
      { path: 'list', component: MenuListComponent, resolve: { menus: MenuListResolver } },
      { path: 'details/:menuId', component: MenuDetailsComponent, resolve: { menu: MenuDetailsResolver } },
      {
        path: ':menuId/food',
        children: [
          { path: 'details/:foodId', component: FoodDetailsComponent, resolve: { food: FoodDetailsResolver } },
          { path: 'create', component: FoodCreateComponent },
        ],
      },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
    resolve: { config: MenuConfigResolver },
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

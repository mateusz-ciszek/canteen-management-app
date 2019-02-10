import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailsComponent } from './food/detail/food-details.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuDetailsComponent } from './details/menu-details.component';
import { MenuListComponent } from './list/menu-list.component';
import { SharedModule } from '../../common/shared.module';
import { FormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';
import { FoodCreateComponent } from './food/create/food-create.component';

@NgModule({
  declarations: [
    FoodCreateComponent,
    FoodDetailsComponent,
    MenuCreateComponent,
    MenuDetailsComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule,
    SharedModule,
  ],
})
export class MenuModule { }

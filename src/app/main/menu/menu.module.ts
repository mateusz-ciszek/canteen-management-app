import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailsComponent } from './food/detail/food-details.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuCreateFoodComponent } from './create/food/menu-create-food.component';
import { MenuCreateSummaryComponent } from './create/summary/menu-create-summary.component';
import { MenuDetailsComponent } from './details/menu-details.component';
import { MenuListComponent } from './list/menu-list.component';
import { SharedModule } from '../../common/shared.module';
import { FormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [
    FoodDetailsComponent,
    MenuCreateComponent,
    MenuCreateFoodComponent,
    MenuCreateSummaryComponent,
    MenuDetailsComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    MenuCreateSummaryComponent,
    MenuCreateFoodComponent,
  ],
})
export class MenuModule { }

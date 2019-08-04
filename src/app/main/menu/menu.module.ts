import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailsComponent } from './food/details/food-details.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuDetailsComponent } from './details/menu-details.component';
import { MenuListComponent } from './list/menu-list.component';
import { SharedModule } from '../../common/shared.module';
import { FormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';
import { FoodCreateComponent } from './food/create/food-create.component';
import { ChangeNameModalComponent } from './modal/change-name/change-name-modal.component';
import { CoalescingComponentFactoryResolver } from '../../services/coalescing-component-factory-resolver.service';
import { CreateAdditionComponent } from './food/create/create-addition/create-addition.component';
import { MenuCreateSummaryComponent } from './create/summary/menu-create-summary.component';
import { MenuCreateFoodComponent } from './create/food/menu-create-food.component';
import { MenuConfigResolver } from './menu-config-resolver';
import { MenuCreateGuard } from './create/menu-create.guard';

@NgModule({
  declarations: [
    ChangeNameModalComponent,
    CreateAdditionComponent,
    FoodCreateComponent,
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
    ChangeNameModalComponent,
    CreateAdditionComponent,
    MenuCreateSummaryComponent,
    MenuCreateFoodComponent,
  ],
  providers: [
    MenuConfigResolver,
    MenuCreateGuard,
  ]
})
export class MenuModule {
  constructor(
      coalescingResolver: CoalescingComponentFactoryResolver,
      localResolver: ComponentFactoryResolver) {

    coalescingResolver.registerResolver(localResolver);
  }
}

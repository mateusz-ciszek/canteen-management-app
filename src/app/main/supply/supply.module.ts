import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyListComponent } from './list/supply-list.component';
import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyPageableListService } from '../../services/pageable-list/supply-pageable-list.service';
import { SupplyListTableComponent } from './list/table/supply-list-table.component';
import { SharedModule } from '../../common/shared.module';
import { FormsModule } from '@angular/forms';
import { SupplyDetailsComponent } from './details/supply-details.component';
import { SupplyDetailsResolver } from './details/supply-details-resolver';
import { SupplyStateBadgeComponent } from './control/supply-state-badge/supply-state-badge.component';

@NgModule({
  declarations: [
    SupplyDetailsComponent,
    SupplyListComponent,
    SupplyListTableComponent,
    SupplyStateBadgeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SupplyRoutingModule,
  ],
  providers: [
    SupplyDetailsResolver,
    SupplyPageableListService,
  ],
})
export class SupplyModule { }

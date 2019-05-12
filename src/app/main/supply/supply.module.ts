import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyListComponent } from './list/supply-list.component';
import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyPageableListService } from '../../services/pageable-list/supply-pageable-list.service';
import { SupplyListTableComponent } from './list/table/supply-list-table.component';
import { SharedModule } from '../../common/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SupplyListComponent,
    SupplyListTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SupplyRoutingModule,
  ],
  providers: [
    SupplyPageableListService,
  ]
})
export class SupplyModule { }

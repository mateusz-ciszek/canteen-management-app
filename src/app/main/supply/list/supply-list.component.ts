import { Component } from '@angular/core';
import { SupplyPageableListService } from '../../../services/pageable-list/supply-pageable-list.service';
import { SupplyListResponse } from '../../../models';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.less'],
})
export class SupplyListComponent {

  private readonly pageSize: number = 10;

  response: SupplyListResponse;
  ready: boolean = false;
  maxPages: number = 0;
  query: string = '';
  page: number = 1;
  clearable: boolean = false;

  constructor(private listService: SupplyPageableListService) {
    listService.$results.subscribe(result => {
      this.response = result;
      this.maxPages = Math.ceil(this.response.itemsCount / this.pageSize);
      this.ready = true;
    });

    listService.init('/supply/list');
    this.pageSize = listService.getPageSize();
  }

  onPageChange(page: number) {
    this.page = page;
    this.requestData();
  }

  search(key: KeyboardEvent) {
    if (!key || key.code === 'Enter') {
      this.page = 1;
      this.requestData();
    }
  }

  clear() {
    this.query = '';
    if (this.clearable) {
      this.requestData();
    }
  }

  private requestData() {
    this.clearable = !!this.query;
    this.ready = false;
    this.listService.more(this.page - 1, this.query, undefined);
  }
}

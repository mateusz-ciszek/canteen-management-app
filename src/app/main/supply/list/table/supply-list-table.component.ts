import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Supply } from '../../../../models';

@Component({
  selector: 'app-supply-list-table',
  templateUrl: './supply-list-table.component.html',
  styleUrls: ['./supply-list-table.component.less']
})
export class SupplyListTableComponent implements OnChanges {

  @Input()
  items: Supply[];

  @Input()
  maxPages: number;

  @Input()
  page: number;

  pages: number[] = [];
  private paginationSize: number;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.preparePagination();
  }

  changePage(page: number): void {
    if (page === this.page) {
      return;
    }
    this.page = page;
    this.pageChange.emit(page);
  }

  previousPage() {
    this.changePage(this.page - 1);
  }

  nextPage() {
    this.changePage(this.page + 1);
  }

  private preparePagination() {
    this.pages = [];
    for (let page = 1; page <= this.maxPages; ++page) {
      this.pages.push(page);
    }

    const index = this.page - 1;
    let start = index - 4;
    let end = index + 5;
    if (this.maxPages > 9) {
      this.paginationSize = 9;
      if (index - 5 < 0) {
        start -= index - 4;
        end -= index - 4;
      } else if (index + 5 > this.pages.length) {
        start += this.pages.length - index - 5;
        end += this.pages.length - index - 5;
      }
      this.pages = this.pages.slice(start, end);
    } else {
      this.paginationSize = this.maxPages;
    }
  }
}

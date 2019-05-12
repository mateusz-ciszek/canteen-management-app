import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SupplyListFilter, SupplyListRequest, SupplyListResponse } from '../../models';
import { Injectable } from '@angular/core';

@Injectable()
export class SupplyPageableListService {
  protected endpoint: string;
  protected pageSize: number = 10;
  protected page: number = 0;

  private readonly _results: Subject<SupplyListResponse> = new Subject();
  readonly $results: Observable<SupplyListResponse> = this._results;

  constructor(private http: HttpClient) {}

  init(endpoint: string, options?: PageableListOptions): void {
    this.endpoint = endpoint;

    if (options) {
      this.setOptions(options);
    }

    const request: SupplyListRequest = {
      page: this.page,
      pageSize: this.pageSize,
      search: undefined,
      filter: undefined,
    };
    this.makeRequest(request);
  }

  more(page: number, query: string, filter: SupplyListFilter): void {
    this.page = page;
    const request = this.prepareRequest(query, filter);
    this.makeRequest(request);
  }

  getPageSize(): number {
    return this.pageSize;
  }

  private setOptions({ pageSize }: PageableListOptions): void {
    if (pageSize) {
      this.pageSize = pageSize;
      this.page = 0;
    }
  }

  private prepareRequest(query: string, filter: SupplyListFilter): SupplyListRequest {
    return {
      page: this.page,
      pageSize: this.pageSize,
      search: query,
      filter,
    };
  }

  private makeRequest(request: SupplyListRequest): void {
    this.http.post<SupplyListResponse>(this.endpoint, request).subscribe(response => this._results.next(response));
  }
}

export interface PageableListOptions {
  pageSize?: number;
}

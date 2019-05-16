import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplyDetailsResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) {}

  getSupplyDetails(id: string): Observable<SupplyDetailsResponse> {
    return this.http.get<SupplyDetailsResponse>(`/supply/${id}`);
  }
}

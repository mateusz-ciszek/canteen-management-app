import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCommentRequest, SupplyChangeStateRequest, SupplyCreateRequest, SupplyDetailsResponse, SupplyStateEnum } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) {}

  getSupplyDetails(id: string): Observable<SupplyDetailsResponse> {
    return this.http.get<SupplyDetailsResponse>(`/supply/${id}`);
  }

  addComment(supplyId: string, content: string): Observable<void> {
    const data: CreateCommentRequest = { content };
    return this.http.post<void>(`/supply/comment/${supplyId}`, data);
  }

  changeState(id: string, state: SupplyStateEnum, rejectionReason?: string): Observable<void> {
    const data: SupplyChangeStateRequest = { id, state, rejectionReason };
    return this.http.patch<void>('/supply', data);
  }

  createSupply(name: string, amount: number, url?: string, description?: string): Observable<void> {
    const data: SupplyCreateRequest = {
      name,
      price: { amount, currency: 'PLN' },
      url: url || undefined,
      description: description || undefined,
    };
    return this.http.post<void>('/supply', data);
  }
}

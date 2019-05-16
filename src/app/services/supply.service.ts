import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCommentRequest, SupplyDetailsResponse } from '../models';

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
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MonthResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {

  constructor(private http: HttpClient) {}

  getMonth(year: number = new Date().getFullYear(), month: number = new Date().getMonth()): Observable<MonthResponse> {
    return this.http.get<MonthResponse>(`/worker/month/${year}/${month}`);
  }
}

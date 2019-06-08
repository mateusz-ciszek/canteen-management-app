import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  DayOffState,
  MonthResponse,
  WorkerCreateRequest,
  WorkerCreateResponse,
  WorkerDetailsResponse,
  WorkerList,
  WorkerPasswordResetRequest,
  WorkerPasswordResetResponse,
  WorkerPermissionUpdateRequest,
} from '../models';
import { Permission } from '../permission';

@Injectable()
export class WorkerService {

  constructor(private http: HttpClient) {}

  getMonth(year: number = new Date().getFullYear(), month: number = new Date().getMonth()): Observable<MonthResponse> {
    return this.http.get<MonthResponse>(`/worker/month/${year}/${month}`);
  }

  requestDaysOff(dates: Date[]): Observable<void> {
    const request = { dates: dates.map(date => date.toISOString()) };
    return this.http.post<void>('/worker/dayOff', request);
  }

  changeDayOffState(id: string, state: DayOffState): Observable<void> {
    const request = { id, state };
    return this.http.patch<void>('/worker/dayoff', request);
  }

  getWorkers(): Observable<WorkerList> {
    return this.http.get<WorkerList>('/worker');
  }

  createWorker(request: WorkerCreateRequest): Observable<WorkerCreateResponse> {
    return this.http.post<WorkerCreateResponse>('/worker', request);
  }

  getWorkerDetails(workerId: string): Observable<WorkerDetailsResponse> {
    return this.http.get<WorkerDetailsResponse>(`/worker/${workerId}`);
  }

  resetPassword(workerId: string): Observable<WorkerPasswordResetResponse> {
    const request: WorkerPasswordResetRequest = { workerId };
    return this.http.post<WorkerPasswordResetResponse>('/worker/password/reset', request);
  }

  getPermissions(workerId: string): Observable<Permission[]> {
    return this.http.get<Permission[]>(`/worker/${workerId}/permissions`);
  }

  savePermissions(workerId: string, permissions: Permission[]): Observable<void> {
    const request: WorkerPermissionUpdateRequest = { permissions };
    return this.http.post<void>(`/worker/${workerId}/permissions`, request);
  }
}

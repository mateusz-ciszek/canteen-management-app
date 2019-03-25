import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {

  constructor(private http: HttpClient) {}

  public getAllWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>('/worker');
  }
}

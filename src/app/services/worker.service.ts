import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {

  constructor(private http: HttpClient) {}

  public getAllWorkers(): Observable<Worker[]> {
    return this.http.get<{ workers: Worker[] }>('/worker').pipe(
      map(result => result.workers),
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private _alert: Subject<Alert> = new Subject();

  addAlert(content: string, level: AlertLevel = 'INFO'): void {
    this._alert.next({ content, level });
  }

  get alert(): Observable<Alert> {
    return this._alert;
  }
}

export interface Alert {
  content: string;
  level: AlertLevel;
}

export type AlertLevel = 'SUCCESS' | 'FAILURE' | 'INFO';

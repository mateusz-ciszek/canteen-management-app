import { Injectable } from '@angular/core';
import { Config } from '../models';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, noop, Observable } from 'rxjs';

@Injectable()
export class ConfigService {

  private _config: Config = null;
  private _changes: BehaviorSubject<Config> = new BehaviorSubject(this._config);

  constructor(private http: HttpClient) {}

  init(): Observable<void> {
    return this.http.get<Config>('/config').pipe(
      tap(config => {
        this._config = config;
        this._changes.next(config);
      }),
      map(noop),
    );
  }

  get config(): Config {
    return this._config;
  }

  get $changes(): Observable<Config> {
    return this._changes;
  }
}

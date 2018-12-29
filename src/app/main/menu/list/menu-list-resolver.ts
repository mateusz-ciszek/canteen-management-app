import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Menu } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class MenuListResolver implements Resolve<Menu[]> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu[]> | Promise<Menu[]> | Menu[] {
    const url: string = '/menu';
    return this.http.get<Menu[]>(url);
  }
}

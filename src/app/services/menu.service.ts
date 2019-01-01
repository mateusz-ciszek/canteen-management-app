import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateMenuModel, Menu } from '../models';
import { noop, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private router: Router) { }

  public getMenuList(): Observable<Menu[]> | Promise<Menu[]> | Menu[] {
    const url: string = '/menu';
    // TODO fix returned value from server
    return this.http.get<Menu[]>(url).pipe(map(result => result['menus']));
  }

  public getMenuDetails(menuId: string): Observable<Menu> | Promise<Menu> | Menu {
    const url: string = `/menu/${menuId}`;
    // TODO fix returned value from server
    return this.http.get<Menu>(url).pipe(
      map(result => result['menu']),
      catchError(err => {
        this.router.navigateByUrl('/main/menu/list').catch(noop);
        return err;
      })
    );
  }

  public createMenu(model: CreateMenuModel): Observable<void> {
    const url: string = '/menu';
    return this.http.post(url, model).pipe(
      map(() => null),
    );
  }
}

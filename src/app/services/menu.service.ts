import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateMenuModel, Menu, MenuChangeNameRequest, MenuConfig } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  public getMenuList(): Observable<Menu[]> {
    const url: string = '/menu';
    // TODO fix returned value from server
    return this.http.get<Menu[]>(url).pipe(map(result => result['menus']));
  }

  public getMenuDetails(menuId: string): Observable<Menu> {
    const url: string = `/menu/${menuId}`;
    return this.http.get<Menu>(url);
  }

  public createMenu(model: CreateMenuModel): Observable<void> {
    const url: string = '/menu';
    return this.http.post(url, model).pipe(
      map(() => null),
    );
  }

  changeName(id: string, name: string): Observable<void> {
    const data: MenuChangeNameRequest = { name };
    return this.http.patch<void>(`/menu/${id}`, data);
  }

  deleteMenu(ids: string[]): Observable<void> {
    return this.http.request<void>('DELETE', `/menu`, { body: { ids } });
  }

  getConfig(): Observable<MenuConfig> {
    return this.http.get<MenuConfig>('/menu/config');
  }
}

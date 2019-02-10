import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private readonly storage: object = {};

  constructor() { }

  saveData(key: string, value: any): void {
    this.storage[key] = value;
  }

  fetchData(key: string): any {
    const data = this.storage[key];
    this.deleteData(key);
    return data;
  }

  deleteData(key): void {
    delete this.storage[key];
  }
}

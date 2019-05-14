import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://192.241.156.153:8000/api/v1/menu/');
  }

    post(id: string) {
        return this.http.post('http://192.241.156.153:8000/api/v1/menu/', null);
    }

    delete() {
        return this.http.delete('http://192.241.156.153:8000/api/v1/menu/');
    }
}

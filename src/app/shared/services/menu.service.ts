import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get('http://192.241.156.153:8000/api/v1/menu/' + id);
  }

    list() {
        return this.http.get('http://192.241.156.153:8000/api/v1/menu/');
    }

    post(body) {
        return this.http.post('http://192.241.156.153:8000/api/v1/menu/', body);
    }

    update(id: string, body) {
        return this.http.post('http://192.241.156.153:8000/api/v1/menu/' + id, body);
    }

    delete(id: string) {
        return this.http.delete('http://192.241.156.153:8000/api/v1/menu/' + id);
    }
}

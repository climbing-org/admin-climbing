import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StaticPageService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://192.241.156.153:8000/api/v1/static-page/');
  }

    post(body) {
        return this.http.post('http://192.241.156.153:8000/api/v1/static-page/', body);
    }

    delete() {
        return this.http.delete('http://192.241.156.153:8000/api/v1/static-page/');
    }
}

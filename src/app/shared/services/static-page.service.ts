import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import StaticPage from '../classes/static-page';

@Injectable()
export class StaticPageService {

    constructor(private http: HttpClient) { }

    get(id: string) {
      return this.http.get('http://192.241.156.153:8000/api/v1/static-page/' + id);
    }

    list() {
      return this.http.get('http://192.241.156.153:8000/api/v1/static-page/');
    }

    post(body) {
        return this.http.post('http://192.241.156.153:8000/api/v1/static-page/', body);
    }

    update(slug: string, body: StaticPage) {
        if (body) {
            delete body['author'];
            delete body['created_at'];
        }
        return this.http.put('http://192.241.156.153:8000/api/v1/static-page/' + slug, body);
    }

    delete(id: string) {
        return this.http.delete('http://192.241.156.153:8000/api/v1/static-page/' + id);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RatingService {

    constructor(private http: HttpClient) { }

    get(slug: string) {
      return this.http.get('https://androidios.kz:8000/api/v1/rating/' + slug + '/');
    }

    list() {
      return this.http.get('https://androidios.kz:8000/api/v1/rating/');
    }

    post(body) {
        return this.http.post('https://androidios.kz:8000/api/v1/rating/', body);
    }

    update(slug: string, body) {
        return this.http.put('https://androidios.kz:8000/api/v1/rating/' + slug + '/', body);
    }

    partial_update(id: number, body: any) {
        return this.http.patch('https://androidios.kz:8000/api/v1/rating/' + id + '/', body);
    }

    delete(id: string) {
        return this.http.delete('https://androidios.kz:8000/api/v1/rating/' + id + '/');
    }
}

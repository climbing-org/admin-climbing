import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RatingService {

    constructor(private http: HttpClient) { }

    list() {
      return this.http.get('https://androidios.kz:8000/api/v1/rating/');
    }

    options() {
        return this.http.get('https://androidios.kz:8000/api/v1/rating/options/');
    }

    single(body) {
        return this.http.post('https://androidios.kz:8000/api/v1/rating/single/', body);
    }
}

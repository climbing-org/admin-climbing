import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

    constructor(private http: HttpClient) { }

    get(slug: string) {
      return this.http.get('https://androidios.kz:8000/api/v1/clubs/' + slug + '/');
    }

    list() {
      return this.http.get('https://androidios.kz:8000/api/v1/clubs/');
    }

    post(body) {
        return this.http.post('https://androidios.kz:8000/api/v1/clubs/', body);
    }

    update(slug: string, body) {
        return this.http.put('https://androidios.kz:8000/api/v1/clubs/' + slug + '/', body);
    }

    partial_update(id: number, body: any) {
        return this.http.patch('https://androidios.kz:8000/api/v1/clubs/' + id + '/', body);
    }

    delete(id: string) {
        return this.http.delete('https://androidios.kz:8000/api/v1/clubs/' + id + '/');
    }
}

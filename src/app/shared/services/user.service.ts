import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

    get(id: number) {
        return this.http.get('https://androidios.kz:8000/api/v1/users/' + id + '/');
    }

    list() {
        return this.http.get('https://androidios.kz:8000/api/v1/users/');
    }

    post(body) {
        return this.http.post('https://androidios.kz:8000/api/v1/users/', body);
    }

    update(id: number, body: any) {
        return this.http.put('https://androidios.kz:8000/api/v1/users/' + id + '/', body);
    }

    partial_update(id: number, body: any) {
        return this.http.patch('https://androidios.kz:8000/api/v1/users/' + id + '/', body);
    }

    change_password(id: number, body: any) {
        return this.http.post('https://androidios.kz:8000/api/v1/users/' + id + '/change_password/', body);
    }

    set_password(id: number, body: any) {
        return this.http.post('https://androidios.kz:8000/api/v1/users/' + id + '/set_password/', body);
    }

    delete(id: string) {
        return this.http.delete('https://androidios.kz:8000/api/v1/users' + id + '/');
    }
}

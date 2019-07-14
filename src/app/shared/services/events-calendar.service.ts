import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsCalendarService {

  constructor(private http: HttpClient) { }


    list() {
        return this.http.get('https://androidios.kz:8000/api/v1/calendar/');
    }

    filter(d: Date) {
        return this.http.get('https://androidios.kz:8000/api/v1/calendar/?date=' + d.toISOString());
    }

}

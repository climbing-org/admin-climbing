import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgmMap, LatLngBounds } from '@agm/core';

@Injectable()
export class GoogleService {

    constructor(private http: HttpClient) { }

    showAllPlaces(agmMap: AgmMap, places: {lat: number, lon: number}[]) {
        console.log(places);
        agmMap.mapReady.subscribe(map => {
            const bounds: LatLngBounds = new google.maps.LatLngBounds();
            for (const place of places) {
                if (place.lat || place.lon) {
                    bounds.extend(new google.maps.LatLng(place.lat || 0, place.lon || 0));
                }
            }

            google.maps.event.addListenerOnce(map, 'idle', () => {
                map.fitBounds(bounds);
            });
        });
    }
}

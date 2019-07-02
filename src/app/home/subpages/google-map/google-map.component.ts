import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { AgmMap } from '@agm/core';
import { GoogleService } from '../../../shared/services/google.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {

    @Input() places: {lat: number, lon: number, name: string}[];

    lastOpenInfoWindow: InfoWindow;

    @ViewChild('agmMap') agmMap: AgmMap;

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
  }

    ngAfterViewInit(): void {
        this.googleService.showAllPlaces(this.agmMap, this.places);
    }

}

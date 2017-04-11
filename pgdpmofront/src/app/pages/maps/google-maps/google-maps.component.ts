import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-google-maps',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent {
    lat: number = 45.421530;
    lng: number = -75.697193;
    zoom: number = 7;
}

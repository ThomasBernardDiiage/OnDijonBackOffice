import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { Pin } from 'src/models/pin.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.scss'],
  template : '<div id="map"></div>'
})
export class MapComponent implements OnInit, OnDestroy {
  private map! : L.Map;

  @Input() latitude : number = 0
  @Input() longitude : number = 0
  @Input() zoom : number = 13
  @Input() pin$?: Observable<Pin | undefined>;
  @Input() pins$?: Observable<Pin[]>;

  constructor() { }

  ngOnInit(): void {
    this.initMap();

    this.pin$?.subscribe(pin => {
      if(pin)
        this.addPinsToMap(pin);
    });

    this.pins$?.subscribe(pins => {
      pins.forEach(pin => {
        this.addPinsToMap(pin);
      })
    });
    
  }

  ngOnDestroy(): void {
    this.map.off()
    this.map.remove()
  }

  private addPinsToMap(pin: Pin) {
    
    var icon = L.icon({
      iconUrl: 'https://www.pngplay.com/wp-content/uploads/12/Pin-PNG-Pic-Clip-Art-Background.png',
      iconSize: [20, 30],
      popupAnchor: [0, -18],
    })

    L.marker([pin.latitude, pin.longitude], {icon: icon}).addTo(this.map)
    .bindPopup(`${pin.popupContent}`)
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: this.zoom
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    })

    tiles.addTo(this.map);
  }
}

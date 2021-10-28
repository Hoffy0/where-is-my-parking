import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-modal-create-marker',
  templateUrl: './modal-create-marker.page.html',
  styleUrls: ['./modal-create-marker.page.scss'],
})
export class ModalCreateMarkerPage implements OnInit {

  markerLat: number;
  markerLng: number;

  constructor(
    private gps: Geolocation,
  ) { }

  ngOnInit() {
  }

  getPosition(){
    this.gps.getCurrentPosition().then((resp) => {
      this.markerLat = resp.coords.latitude
      this.markerLng = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }

  createMarker(title, desc, lunOpen){
    console.log(title.value, desc.value, lunOpen)
  }

}

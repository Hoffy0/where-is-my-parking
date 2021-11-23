import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { marker } from '../../shared/marker.interface';
import { AuthService } from '../../services/auth.service';
import { MarkerService } from '../../services/marker.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-modal-create-marker',
  templateUrl: './modal-create-marker.page.html',
  styleUrls: ['./modal-create-marker.page.scss'],
})
export class ModalCreateMarkerPage implements OnInit {

  markerLat: number = 0;
  markerLng: number = 0;

  cash:   any = false;
  tc:     any = false;
  wallet: any = false;

  userEmail: string;

  // Days
  monOpen:  string;
  monClose: string;
  /******************/
  tueOpen:  string;
  tueClose: string;
  /******************/
  wedOpen:  string;
  wedClose: string;
  /******************/
  thuOpen:  string;
  thuClose: string;
  /******************/
  friOpen:  string;
  friClose: string;
  /******************/
  satOpen:  string;
  satClose: string;
  /******************/
  sunOpen:  string;
  sunClose: string;

  constructor(
    private gps: Geolocation,
    private auth: AuthService,
    private marker: MarkerService
  ) { }

  ngOnInit() {
    this.getPosition();
    this.auth.user$.subscribe( data => {
      this.userEmail = data.email;
    });
  }

  async getPosition(){
    await this.gps.getCurrentPosition().then((resp) => {
      this.markerLat = resp.coords.latitude
      this.markerLng = resp.coords.longitude
      console.log(this.markerLat)
      console.log(this.markerLng)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }

  createMarker(title, desc, pay, mon, tue, wed, thu, fri, sat, sun){
    const monOpen = new Date(this.monOpen).getHours() + ":" + new Date(this.monOpen).getMinutes();
    const tueOpen = new Date(this.tueOpen).getHours() + ":" + new Date(this.tueOpen).getMinutes();
    const wedOpen = new Date(this.wedOpen).getHours() + ":" + new Date(this.wedOpen).getMinutes();
    const thuOpen = new Date(this.thuOpen).getHours() + ":" + new Date(this.thuOpen).getMinutes();
    const friOpen = new Date(this.friOpen).getHours() + ":" + new Date(this.friOpen).getMinutes();
    const satOpen = new Date(this.satOpen).getHours() + ":" + new Date(this.satOpen).getMinutes();
    const sunOpen = new Date(this.sunOpen).getHours() + ":" + new Date(this.sunOpen).getMinutes();

    const monClose = new Date(this.monClose).getHours() + ":" + new Date(this.monClose).getMinutes();
    const tueClose = new Date(this.tueClose).getHours() + ":" + new Date(this.tueClose).getMinutes();
    const wedClose = new Date(this.wedClose).getHours() + ":" + new Date(this.wedClose).getMinutes();
    const thuClose = new Date(this.thuClose).getHours() + ":" + new Date(this.thuClose).getMinutes();
    const friClose = new Date(this.friClose).getHours() + ":" + new Date(this.friClose).getMinutes();
    const satClose = new Date(this.satClose).getHours() + ":" + new Date(this.satClose).getMinutes();
    const sunClose = new Date(this.sunClose).getHours() + ":" + new Date(this.sunClose).getMinutes();

    const data: marker = {
      active: true,
      coords: {
        lat: this.markerLat,
        lng: this.markerLng
      },
      pay: {
        pay: pay.checked,
        currency: "CLP",
        paymeans: {
          cash:   this.cash,
          tc:     this.tc,
          wallet: this.wallet
        }
      },
      atribs: {
        title: title.value,
        desc: desc.value,
        owner: this.userEmail,
        reservation: true,
        moneyback: false,
        days: [
          {mon: {activeDay: mon.checked, hours: {open: monOpen, close: monClose}, price: {minute: "", hour: "", day: "", month: ""}}},
          {tue: {activeDay: tue.checked, hours: {open: tueOpen, close: tueClose}, price: {minute: "", hour: "", day: "", month: ""}}},
          {wed: {activeDay: wed.checked, hours: {open: wedOpen, close: wedClose}, price: {minute: "", hour: "", day: "", month: ""}}},
          {thu: {activeDay: thu.checked, hours: {open: thuOpen, close: thuClose}, price: {minute: "", hour: "", day: "", month: ""}}},
          {fri: {activeDay: fri.checked, hours: {open: friOpen, close: friClose}, price: {minute: "", hour: "", day: "", month: ""}}},
          {sat: {activeDay: sat.checked, hours: {open: satOpen, close: satClose}, price: {minute: "", hour: "", day: "", month: ""}}},
          {sut: {activeDay: sun.checked, hours: {open: sunOpen, close: sunClose}, price: {minute: "", hour: "", day: "", month: ""}}}
        ]
      }
    }
    console.log(data);
    try {
      this.marker.createMarker(data);
    } catch (err) {
      console.error(err);
    }

  }
  

}

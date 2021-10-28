import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ModalCreateMarkerPage } from '../pages/modal-create-marker/modal-create-marker.page';
import { AuthService } from '../services/auth.service';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: any;

  lessee: Boolean = false;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;  

  userLat     = 0;
  userLng     = 0;
  title       = undefined;
  ratings     = undefined;  
  today       = undefined;
  hour        = undefined;
  open        = undefined;
  close       = undefined;
  priceMinute = null;
  priceHour   = null;
  priceDay    = null;
  priceMonth  = null;


  infoWindows: any = [ ];
  markers: any = [ ]


  icon = {
    url: '../../../assets/ico_estoy_aqui.png',
    scaledSize: new google.maps.Size(50,50)
  }

  constructor(
    private gps: Geolocation,
    public modal: ModalController,
    public loading: LoadingController,
    public auth: AuthService,
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe( data => {
      console.log(data.lessee)
      this.lessee = data.lessee
    });
    // this.loadingMap();
  }

  //Cada vez que se entre a la pagina hacer ...
  async ionViewDidEnter(){
    this.auth.user$.subscribe( data => {
      console.log(data.lessee)
      this.lessee = data.lessee
    });
    // this.geolocation();
    this.currentLocation();
    //this.showMap();
    //setTimeout(() => { this.showMap(); }, 2000);
    if(this.userLat != 0 || this.userLng != 0){
      this.showMap();

      let currentLocationUser = new google.maps.LatLng(this.userLat, this.userLng);
      let mapMarkerUser = new google.maps.Marker({
        position: currentLocationUser,
        icon: this.icon
      });
      //mapMarkerUser.setIcon();
      mapMarkerUser.setMap(this.map);
      
    }else{
      console.log("Aun no hay datos! :(");
      //window.location.reload();
    }
  }

  async loadingMap(){
    this.currentLocation();
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Cargando Mapa...',
      duration: 5000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    if(this.userLat != 0 || this.userLng != 0){
      this.showMap();

      let currentLocationUser = new google.maps.LatLng(this.userLat, this.userLng);
      let mapMarkerUser = new google.maps.Marker({
        position: currentLocationUser,
        icon: this.icon
      });
      //mapMarkerUser.setIcon();
      mapMarkerUser.setMap(this.map);
      
    }else{
      console.log("Aun no hay datos! :(");
      //window.location.reload();
    }
  }

  //Agrega marcadores al mapa
  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.coords.lat, marker.coords.lng);
      let mapMarker = new google.maps.Marker({
        position: position,
        // atribs
        title: marker.atribs.title,
        desc: marker.atribs.des,
        owner: marker.atribs.owner,
        days: marker.atribs.days,
        //coords
        latitude: marker.coords.lat,
        longitude: marker.coords.lng,
        //pay
        //style
        animation: marker.animation,
        //rating
        ratings: marker.rating

      });

    mapMarker.setMap(this.map);
    this.addInfoWindowToMarker(mapMarker);

    }
  }

  DayAndHour(){
    //console.log("OK!"));
    // obtener el dia actual
    let ms = Date.now();
    let today = new Date(ms);

    //Day
    this.today = today.toDateString();
    this.today = this.today.slice(0,3).toLowerCase();
    // console.log(this.day)

    //Hour
    this.hour = today.getHours() + ':' + today.getMinutes();
    // console.log(this.hour);
  }

  //Agrega la info del marcador y se despliega al pincharlo
  addInfoWindowToMarker(marker){
    this.DayAndHour()

    this.title = marker.title
    this.ratings = marker.ratings

    // console.log(marker.days)
    // console.log(this.today)

    for(let i in marker.days){
      let days = (Object.keys(marker.days[i])[0]);
      // console.log(Object.keys(days)[0]);
      if(days == this.today){
        // console.log(days)
        switch(days){
          case "mon":
            console.log("LUNES");
            this.open        = marker.days[i].mon.hours.open;
            this.close       = marker.days[i].mon.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].mon.price.minute;
            this.priceHour   = marker.days[i].mon.price.hour;
            this.priceDay    = marker.days[i].mon.price.day;
            this.priceMonth  = marker.days[i].mon.price.month;
            break;

          case "tue":
            console.log("MARTES");
            this.open        = marker.days[i].tue.hours.open;
            this.close       = marker.days[i].tue.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].tue.price.minute;
            this.priceHour   = marker.days[i].tue.price.hour;
            this.priceDay    = marker.days[i].tue.price.day;
            this.priceMonth  = marker.days[i].tue.price.month;
            break;

          case "wed":
            console.log("MIERCOLES");
            this.open        = marker.days[i].wed.hours.open;
            this.close       = marker.days[i].wed.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].wed.price.minute;
            this.priceHour   = marker.days[i].wed.price.hour;
            this.priceDay    = marker.days[i].wed.price.day;
            this.priceMonth  = marker.days[i].wed.price.month;
            break;

          case "thu":
            console.log("JUEVES");
            this.open        = marker.days[i].thu.hours.open;
            this.close       = marker.days[i].thu.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].thu.price.minute;
            this.priceHour   = marker.days[i].thu.price.hour;
            this.priceDay    = marker.days[i].thu.price.day;
            this.priceMonth  = marker.days[i].thu.price.month;
            break;

          case "fri":
            console.log("VIERNES");
            this.open        = marker.days[i].fri.hours.open;
            this.close       = marker.days[i].fri.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].fri.price.minute;
            this.priceHour   = marker.days[i].fri.price.hour;
            this.priceDay    = marker.days[i].fri.price.day;
            this.priceMonth  = marker.days[i].fri.price.month;
            break;

          case "sat":
            console.log("SABADO");
            this.open        = marker.days[i].sat.hours.open;
            this.close       = marker.days[i].sat.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].sat.price.minute;
            this.priceHour   = marker.days[i].sat.price.hour;
            this.priceDay    = marker.days[i].sat.price.day;
            this.priceMonth  = marker.days[i].sat.price.month;
            break;

          case "sun":
            console.log("DOMINGO");
            this.open        = marker.days[i].sun.hours.open;
            this.close       = marker.days[i].sun.hours.close;
            ////////////////////////////////////////////
            this.priceMinute = marker.days[i].sun.price.minute;
            this.priceHour   = marker.days[i].sun.price.hour;
            this.priceDay    = marker.days[i].sun.price.day;
            this.priceMonth  = marker.days[i].sun.price.month;
            break;
        }
      }

      
      // if(currentDay == this.day){
      //   console.log()
      // }
    }

    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading" style="color: black;">' + marker.title + '</h2>' +
                              '<h4 style="color: black;">  Dueño: '       + marker.owner      + '</h4>'+
                              '<div id="bodyContent">' +
                                '<p style="color: black;"> Horario: '     + this.open  + ' - ' + this.close + '</p>' +
                                '<table>' +
                                  '<thead style="color: black;">' +
                                    '<th>' + 'Precios' + '</th>' +
                                  '</thead>' +
                                  '<tbody>' +
                                    '<tr style="color: black;">' +
                                      '<th>' + 'Minuto' + '</th>'+
                                      '<th>' + 'Hora ' + '</th>' +
                                      '<th>' + 'Día ' + '</th>'+
                                      '<th>' + 'Mes ' + '</th>'+
                                    '</tr>' +
                                    '<tr style="color: black;">' +
                                      '<th>' + this.priceMinute + '' + '</th>' +
                                      '<th>' + this.priceHour   + '' + '</th>' +
                                      '<th>' + this.priceDay    + '' + '</th>' +
                                      '<th>' + this.priceMonth  + '' + '</th>' +
                                    '</tr>' +
                                  '</tbody>' +

                                '</table>' + 
                                '<p style="color: black;"> Descripcion: ' + marker.desc                     + '</p>' +
                                // '<p style="color: black;"> Latitude: '    + marker.latitude                 + '</p>' +
                                // '<p style="color: black;"> Lonmgitude: '  + marker.longitude                + '</p>' +
                                '<ion-button id="navigate"> Ir </ion-button>' +
                                '<ion-button id="ver-mas"> Ver más </ion-button>' +
                              '</div>' +
                            '</div>';
    
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
      
      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log("Clicked");
          //
          let GOOGLE_MAP_URL = 'https://www.google.com/maps/dir/?api=1'; 
          window.open(
            GOOGLE_MAP_URL + '&origin=' + this.userLat + '%2C' + this.userLng + '&destination=' + marker.latitude + '%2C' + marker.longitude
            );
        });
      });

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('ver-mas').addEventListener('click', () => {
          console.log("ver-mas Clicked!");
          // this.presentModal();
          //
        });
      });

      // console.log(marker.title);
      // console.log(marker.desc);
      // console.log(marker.latitude);
      // console.log(marker.longitude);
      // console.log(marker.days)
      // console.log("Clicked");


    });
    this.infoWindows.push(infoWindow);
    //console.log("Clicked");
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
      

    }
  }

  currentLocation(){
    let watch = this.gps.watchPosition();
    watch.subscribe( (data) => {
      // console.log(data.coords);
      // console.log(data);
      // console.log("--------------------");
      this.userLat = data.coords.latitude;
      this.userLng = data.coords.longitude;
    });

  }

  //Muestra el mapa
  showMap(){
    // console.log("userLat: " + this.userLat + " // " + "userLng: " + this.userLng);

    let currentLocation = new google.maps.LatLng(this.userLat, this.userLng);
    const options = {
      center: currentLocation,
      zoom: 15,
      disableDefaultUI: true,
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    //Mostrar marcadores personalizados
    this.addMarkersToMap(this.markers);

  }

  async presentModal() {
    //console.log(this.ratings)
    const modal = await this.modal.create({
      component: ModalCreateMarkerPage,
      cssClass: 'my-custom-class',
      componentProps: {
        title: this.title,
        ratings: this.ratings
      }
    });
    return await modal.present();
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

// Firebase (old API)
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
  ],
  providers: [
    Geolocation,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }, 
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

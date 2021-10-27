import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCreateMarkerPageRoutingModule } from './modal-create-marker-routing.module';

import { ModalCreateMarkerPage } from './modal-create-marker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCreateMarkerPageRoutingModule
  ],
  declarations: [ModalCreateMarkerPage]
})
export class ModalCreateMarkerPageModule {}

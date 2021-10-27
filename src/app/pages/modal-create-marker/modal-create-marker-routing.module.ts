import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCreateMarkerPage } from './modal-create-marker.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCreateMarkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCreateMarkerPageRoutingModule {}

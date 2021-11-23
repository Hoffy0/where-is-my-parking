import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { marker } from '../shared/marker.interface';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(
    private fireStore: AngularFirestore,
  ) { }

  async createMarker(data: marker){
    return this.fireStore.collection("marker").add(data);
  }

  async readAllMarker(){
    return this.fireStore.collection("marker").snapshotChanges();
  }



}

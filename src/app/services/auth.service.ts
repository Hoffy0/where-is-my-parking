import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private toastrCtrl: ToastController,
  ) { 
    this.user$ = this.fireAuth.authState.pipe(
      switchMap((user) => {
        if(user){
          return this.fireStore.doc<User>("user/" + user.uid).valueChanges();
        }
        return of(null)
      })
    );
  }
  
  /******************** BY EMAIL ***************************/
  async register(email: string, password: string): Promise<User>{
    try {
      const { user } = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      return user;
    } catch (err) {
      console.error(err);
      const toast = await this.toastrCtrl.create({
        position: 'middle',
        message: err.message,
        duration: 6000,
        color: "danger",
        keyboardClose: true,
      });
      toast.present();
    }
  }
  async login(email: string, password: string): Promise<User>{
    try {
      const { user } = await this.fireAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch (err) {
      console.error(err)
      const toast = await this.toastrCtrl.create({
        position: 'middle',
        message: err.message,
        duration: 6000,
        color: "danger",
        keyboardClose: true,
      });
      toast.present();
    }
  }

  /******************** BY GOOGLE AUTH ***************************/
  async googleLogin(){

  }

  /******************** */
  async logOut(){
    try {
      await this.fireAuth.signOut();
    } catch (err) {
      console.error(err)
    }
  }

  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc("user/" + user.uid);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };
    return userRef.set(data, { merge: true });
  }

}

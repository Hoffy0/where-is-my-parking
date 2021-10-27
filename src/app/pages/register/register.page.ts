import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private auth: AuthService,
    private toasterCtrl: ToastController,

  ) { }

  ngOnInit() {
  }

  async register(email, password){
    try {
      const user = await this.auth.register(email, password)
      if(user){
        console.log("User =>",user)
      }
    } catch (err) {
      console.error(err)

    }
  }

}

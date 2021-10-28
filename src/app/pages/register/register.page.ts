import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private auth: AuthService,
    private toasterCtrl: ToastController,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  async register(name, email, password, lessee, rut){
    try {
      const user = await this.auth.register(name, email, password, lessee, rut)
      // this.router.navigate(["/"]);
      if(user){
        console.log("User =>",user)
      }
    } catch (err) {
      console.error(err)

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async login(email, password){
    try {
      const user = await this.auth.login(email.value, password.value)
      if(user){
        console.log("User => ", user)
        this.router.navigate(["/"]);
      }
    } catch (err) {
      console.error(err);
    }

  }

}

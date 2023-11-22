import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  isLoggedIn = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.model.phoneNumber, this.model.password)
    this.authService.setLoggedIn(false);
  }
}

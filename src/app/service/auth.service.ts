import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //check trạng thái đăng nhập
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  //SetLogin
  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  constructor(private http: HttpClient, private route:Router) {}

  login(PhoneNumber: string, password: string) {
    return this.http.post('https://localhost:44383/api/LoginCustomer/Process', { PhoneNumber, password })
      .subscribe( (data: any)  => {
        if(data.data.message == 'Tài khoản không tồn tại. Vui lòng đăng ký tài khoản mới !!! ')
        {
          return alert(data.data.message)
        } else {
          // Lưu token vào bộ nhớ cục bộ
          localStorage.setItem('currentUser', JSON.stringify(data));
          // Điều hướng người dùng sau khi đăng nhập thành công
          this.setLoggedIn(true);
          alert('Đăng nhập thành công !')
          this.route.navigate(['home-page'])
        }
        },
        error => {
          console.log('Login error',error)
          this.setLoggedIn(false)
        }
      );
    }
  logout(){

  }

}

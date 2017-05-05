import { Injectable } from '@angular/core';
import {LoginHttpService} from './server-provider/login-http.service'

@Injectable(
)
export class LoginService {

  constructor(private loginHttp: LoginHttpService) { }

  login (email: string, password: string) {
    return this.loginHttp.getToken(email,password).map(
      data =>{
        document.cookie = "Authorization=Bearer " + data.access_token;
        localStorage.setItem("role", data.Roles);
        return data},
      error => {
        return error;
      });
  }
  logout () {
    return this.loginHttp.logout().map(
      data =>{
        document.cookie = "Authorization=''";
        localStorage.setItem("role", "");
        return data},
      error => {
        return error;
      });
  }

}

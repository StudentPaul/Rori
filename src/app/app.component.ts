import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {LoginService} from './login.service'
import {LoginHttpService} from './server-provider/login-http.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, LoginHttpService]

})
export class AppComponent implements OnInit{
  selectedOption: string;
  loggedIn: boolean;
  role: string;
  constructor(public dialog: MdDialog, private loginService: LoginService)  {

  }
  ngOnInit() {
    this.loggedIn = false;
    this.role = localStorage.getItem('role');
  }
  getRole() {
    this.role = localStorage.getItem('role');
    return this.role||'Logged out';
  }
  logout(){
    this.loginService.logout().subscribe(
      data=>{alert('logged out')},
      err=>{alert('ERROR during logging out')}
    );
  }
  openLoginDialog(){
    let dialogRef = this.dialog.open(DialogLogin);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'success')
      this.loggedIn = true;
    });

  }
  title = 'app works!';
}

@Component({
  selector: 'dialog-login',
  templateUrl: 'dialog-login.html',
  providers: [LoginService,LoginHttpService]
})
export class DialogLogin {
  constructor(public dialogRef: MdDialogRef<DialogLogin>, private loginService: LoginService) {}

  email: string;
  password: string;
  waiting: boolean = false;
  message: string = '';

  login() {
    this.waiting = true;
    this.loginService.login(this.email, this.password)
      .subscribe(
        data=> {
          this.waiting = false;
          this.dialogRef.close('success')
        },
        error=> {
          this.waiting = false;
          this.message = 'Error during logging in. Please, try again.';
        }
      );
  }


}

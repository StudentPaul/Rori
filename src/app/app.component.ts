import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MdDialog)  {

  }
  openRegisterDialog() {
    let dialogRef = this.dialog.open(DialogRegister);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }
  openLoginDialog(){
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });

  }
  title = 'app works!';
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
@Component({
  selector: 'dialog-register',
  templateUrl: './dialog-register.html',
})
export class DialogRegister {
  constructor(public dialogRef: MdDialogRef<DialogRegister>) {}
}

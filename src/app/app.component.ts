import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption: string;
  constructor(public dialog: MdDialog)  {

  }
  openLoginDialog(){
    let dialogRef = this.dialog.open(DialogLogin);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });

  }
  title = 'app works!';
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'dialog-login.html',
})
export class DialogLogin {
  constructor(public dialogRef: MdDialogRef<DialogLogin>) {}
}

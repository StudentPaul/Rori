import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fontSize : number =24;
  myState = 'Arial';
  states = [{code: 'Arial', name: 'Arial'},
    {code: 'sans-serif', name: 'sans-serif'},
    {code: 'Lucida Grande', name: 'Lucida Grande'},
    {code: 'Comic Sans MS', name: 'Comic Sans MS'},
    {code: 'Verdana', name: 'Verdana'},
    {code: 'Courier New', name: 'Courier New'},
    {code: 'Trebuchet MS', name: 'Trebuchet MS'},
    {code: 'Gadget', name: 'Gadget'},
    {code: 'Times New Roman', name: 'Times New Roman'},

  ];
  changeFontSize() : void {
    $("<style>* {  font-size:"+this.fontSize+"px; }</style>").appendTo("head");
    console.log('size:'+this.fontSize);
  }
  changeFont() : void {
    $("<style>* {  font-family:"+this.myState+"; }</style>").appendTo("head");
    console.log('font-family:'+this.myState);
  }

}

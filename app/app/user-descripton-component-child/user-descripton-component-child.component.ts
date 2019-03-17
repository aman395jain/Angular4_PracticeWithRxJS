import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'user-descripton-component-child',
  templateUrl: './user-descripton-component-child.component.html',
  styleUrls: ['./user-descripton-component-child.component.css']
})
export class UserDescriptonComponentChildComponent{

  constructor() { }
    @Input() major: number;

  printConsole = () => {
    console.log('Hiiiiiii!!!!!!!!!!!!!!!')
  }

}

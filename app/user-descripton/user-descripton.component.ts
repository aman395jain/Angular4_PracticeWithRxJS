import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-user-descripton',
    templateUrl: './user-descripton.component.html',
    styleUrls: ['./user-descripton.component.css']
})
export class UserDescriptonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    navigateToUserNestedComp = () => {
      this.router.navigate(['/userDiscription/userDiscriptionNested'])
    }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng-nav',
  templateUrl: 'nav.template.html'
})

export class NavbarComponent {
    appName: string = "Home";
    registerationPage: string = "Sign Up";
    loginPage: string = "Sign In";
}

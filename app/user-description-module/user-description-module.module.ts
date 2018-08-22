import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDescriptionRouteModule} from "../user-description-route/user-description-route.module";
import {UserDescriptonComponent} from "../user-descripton/user-descripton.component";

@NgModule({
  imports: [
    CommonModule,
      UserDescriptionRouteModule
  ],
    exports: [UserDescriptonComponent, UserDescriptionRouteModule],
  declarations: [UserDescriptonComponent]
})
export class UserDescriptionModule { }

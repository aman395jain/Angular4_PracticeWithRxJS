import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {UserDescriptonComponent} from "../user-descripton/user-descripton.component";

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot([
          {path: 'userDiscription', component: UserDescriptonComponent }
          ],{ preloadingStrategy: PreloadAllModules })
  ],
  declarations: [],
    exports: [ RouterModule ]
})
export class UserDescriptionRouteModule { }

import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ProductComponent } from './products/product.component';
import {RegisterFormComponent} from "./register-form/register-form.component";
import {ObservePageComponent} from "./observe-page/observe-page.component";
import {LoginFormComponent} from "./login-form/login-form.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: ProductComponent },
            { path: 'register', component: RegisterFormComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'observePage', component: ObservePageComponent},
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './products/product.component';
import { NavbarComponent } from './nav/nav.component';
import { ObservePageComponent } from './observe-page/observe-page.component';

import { ProductService } from './products/product.service';
import {RegisterFormComponent} from "./register-form/register-form.component";

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent,
        ProductComponent,
        RegisterFormComponent,
        NavbarComponent,
        ObservePageComponent
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})

export class AppModule { }
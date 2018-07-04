import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {DataFromRegisterationFormService} from '.././register-form/data-from-registeration-form.service'

@Component({
    moduleId: module.id,
    selector: 'app-observe-page',
    templateUrl: './observe-page.component.html',
    styleUrls: ['./observe-page.component.css']
})
export class ObservePageComponent  {
     private urlData: any;
     private urlDataToMethod : any;

    // private _observeUrl: url = "https://jsonplaceholder.typicode.com/users";

    constructor(private http: Http, private dataFromRegisterationFormService:DataFromRegisterationFormService) {
        this.getDataUrl();
        this.getDataFromRegister();

    }
    getDataFromRegister = function ():void {
          this.dataFromRegisterationFormService.sharedDataViaService().subscribe((data:any) => {
              this.data = data; // And he have data here too!
          })

    }
    getDataUrl = function () {
        var _observeUrl = "https://jsonplaceholder.typicode.com/users";
        this.http.get(_observeUrl).subscribe((res: Response) => {
            this.urlDataToMethod = res.json();
            console.log(this.urlDataToMethod[0]);
            return this.urlDataToMethod;
        })
    }





}

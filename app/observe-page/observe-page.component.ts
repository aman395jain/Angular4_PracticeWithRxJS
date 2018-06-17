import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

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

    constructor(private http: Http) {
        this.getDataUrl();
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

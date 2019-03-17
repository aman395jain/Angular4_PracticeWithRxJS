import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class DataFromJsonPlaceHolderService {
    private getData: any = new Subject();

    constructor(private http: Http) {
    }

    getDataFromApi(): Observable<Response> {
        var _observeUrl = "https://jsonplaceholder.typicode.com/users";
        return this.http.get(_observeUrl)
            .map((res:Response) => res.json()).share()
            // .multicast(()=> new Subject());
        // console.log(this.getData)
        // return of(this.getData);
    }



}

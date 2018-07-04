import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class DataFromRegisterationFormService {
private sharedData : any;
  constructor() { }
    sharedDataViaService(data:any): Observable<any>{
            console.log(data);
            this.sharedData = data;
        return of(this.sharedData);

    }
}

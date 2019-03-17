import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {DataFromRegisterationFormService} from "../register-form/data-from-registeration-form.service";
import {Injectable} from "@angular/core";

@Injectable()
export class loginCanActivate implements CanActivate {
    constructor(private dataFromRegisterationFormService: DataFromRegisterationFormService) {

    }
    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (localStorage.getItem('lName') && localStorage.getItem('lName') !== ' '  && localStorage.getItem('lName') !== null ) {
            console.log(localStorage.getItem('lName'))
            return true
        } else {
                alert('please enter the valid name')
            return false
        }
    }


}
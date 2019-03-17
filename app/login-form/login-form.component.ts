import {AfterViewChecked, Component, OnChanges, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {DataFromRegisterationFormService} from "../register-form/data-from-registeration-form.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


    public loginForm: FormGroup;


    constructor(fb: FormBuilder, private dataFromRegisterationFormService:DataFromRegisterationFormService, private router: Router, activatedRoute:ActivatedRoute) {
        this.loginForm = fb.group({
            loginName: [null, Validators.required],
            email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
        });

        this.dataFromRegisterationFormService.sharedDataViaService(this.loginForm.value);

console.log(activatedRoute);
    }


    btnToObservePage= function (loginName) {
        this.router.navigate(['/observePage'], {queryParams: {name: this.loginName._value}})
        localStorage.setItem('lName', this.loginForm.value.loginName)
        console.log(loginName)
    };

    get loginName() {
        return this.loginForm.get('loginName') as FormControl;
    }

    get email() {
        return this.loginForm.get('email') as FormControl;
    }

    send(){
        console.log(this.loginForm.value);
        //this.router.navigate(['/observePage'], {queryParams: {name: this.loginName}})
        this.dataFromRegisterationFormService.sharedDataViaService(this.loginForm.value);
    }

}

function patternValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): any => {
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? {'patternInvalid': {regexp}} : null;
    };
}

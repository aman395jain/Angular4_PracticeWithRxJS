import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    public registerForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.registerForm = fb.group({
            name: [null, Validators.required],
            email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
        });

        //this.send();
    }

    get name() {
        return this.registerForm.get('name') as FormControl;
    }

    get email() {
        return this.registerForm.get('email') as FormControl;
    }

    send(){
      console.log(this.registerForm.value);
  }

}

function patternValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? {'patternInvalid': {regexp}} : null;
    };
}
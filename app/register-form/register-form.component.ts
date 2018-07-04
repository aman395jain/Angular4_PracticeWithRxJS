import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {DataFromRegisterationFormService} from './data-from-registeration-form.service'

@Component({
    moduleId: module.id,
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    public registerForm: FormGroup;

    constructor(fb: FormBuilder, private dataFromRegisterationFormService: DataFromRegisterationFormService) {
        this.registerForm = fb.group({
            name: [null, Validators.required],
            email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6), patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
        });


        this.dataFromRegisterationFormService.sharedDataViaService(this.registerForm.value);
    }

    get name() {
        return this.registerForm.get('name') as FormControl;
    }

    get email() {
        return this.registerForm.get('email') as FormControl;
    }

    get password() {
        return this.registerForm.get('password') as FormControl;
    }

    send() {
        console.log(this.registerForm.value);
        this.dataFromRegisterationFormService.sharedDataViaService(this.registerForm.value);
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
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'az-login',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public router: Router;
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;

    constructor(router: Router, fb: FormBuilder, private auth: AuthService) {
        this.router = router;
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            console.log(values);

            console.log('Username :' + this.email.value);
            console.log('password :' + this.password.value);

            this.auth.login(this.email.value, this.password.value)
                .then(sukses => {
                    if (sukses) {
                        this.router.navigate(['pages/dashboard']);
                    } else {
                        console.log("Login gagal");
                    }
                }).catch(error => {
                    console.log(error);
                });
        }
    }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}

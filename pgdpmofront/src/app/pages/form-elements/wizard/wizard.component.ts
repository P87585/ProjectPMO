import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { WizardValidationService } from './wizard-validation.service';

@Component({
  selector: 'az-wizard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [ WizardValidationService ] 
})
export class WizardComponent {
    public steps:any[];
    public accountForm:FormGroup;
    public personalForm:FormGroup;
    public paymentForm:FormGroup;
    public details:any = {};
    public showConfirm:boolean;

    constructor(private formBuilder: FormBuilder) {   

        this.steps = [
          {name: 'Account Information', icon: 'fa-lock', active: true, valid: false, hasError:false },
          {name: 'Personal Information', icon: 'fa-user', active: false, valid: false, hasError:false },
          {name: 'Payment Information', icon: 'fa-credit-card', active: false, valid: false, hasError:false },
          {name: 'Confirm Your Details', icon: 'fa-check-square-o', active: false, valid: false, hasError:false }
        ]

        this.accountForm = this.formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirmPassword': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, WizardValidationService.emailValidator])]            
        }, {validator: WizardValidationService.matchingPasswords('password', 'confirmPassword')});

        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', Validators.required],
            'lastname': ['', Validators.required],
            'gender': [''],
            'email': ['', Validators.compose([Validators.required, WizardValidationService.emailValidator])],
            'phone': ['', Validators.required],
            'zipcode': ['', Validators.required],
            'country': ['', Validators.required],
            'state' : [''],
            'address' : ['']
        });

        this.paymentForm = this.formBuilder.group({
            'cardtype': ['', Validators.required],
            'cardnumber': ['', Validators.compose([Validators.required, WizardValidationService.numberValidator])],
            'cvc': ['', Validators.compose([Validators.required, WizardValidationService.numberValidator])],
            'expirymonth': ['', Validators.required],
            'expiryyear': ['', Validators.required]
        });        
    }

    public next(){
        let accountForm = this.accountForm;
        let personalForm = this.personalForm;
        let paymentForm = this.paymentForm;

        if(this.steps[this.steps.length-1].active)
            return false;
            
        this.steps.some(function (step, index, steps) {
            if(index < steps.length-1){
                if(step.active){
                    if(step.name=='Account Information'){
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                    if(step.name=='Personal Information'){
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                    if(step.name=='Payment Information'){
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                }
            }   
        });

        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
        this.details.gender = this.personalForm.value.gender;
        this.details.email = this.personalForm.value.email;
        this.details.phone = this.personalForm.value.phone;
        this.details.country = this.personalForm.value.country;
        this.details.zipcode = this.personalForm.value.zipcode;
        this.details.address = this.personalForm.value.address;
        this.details.cardtype = this.paymentForm.value.cardtype;
        this.details.cardnumber = this.paymentForm.value.cardnumber;  
    }

    public prev(){
        if(this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if(index != 0){
                if(step.active){
                    step.active = false;
                    steps[index-1].active=true;
                    return true;
                }
            }             
        });
    }

    public confirm(){
        this.steps.forEach(step => step.valid = true);
    }

   
}


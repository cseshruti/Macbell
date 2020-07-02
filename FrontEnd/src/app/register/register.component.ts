import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
    loading = false;
    submitted = false;
    step1 = true;
    step2 = false;
    profileTypes = {
        'student': ['intership', 'job seeker', 'freelancing work', 'startup idea', 'startup', 'join startup as a cofounder', 'join startup as team member'],
        'entrepreneur': ['startup idea', 'startup', 'join startup as a cofounder', 'join startup as team member'],
        'student entrepreneur': ['intership', 'job seeker', 'freelancing work', 'startup idea', 'startup', 'join startup as a cofounder', 'join startup as team member'],
        'businessman': ['company', 'firm' , 'franchisee' , 'Distributors', 'wholesalers' , 'investor'],
        'investor' : ['investor'],
        'freelancer' : ['freelancer']
    };
    profiles = [];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        // console.log(this.profileTypes.keys());
        console.log(typeof(this.profileTypes));
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            category: ['', [Validators.required]],
            profileType: ['', [Validators.required]],
            // address: ['', [Validators.required]],
            // contact: ['', [Validators.required, Validators.minLength(9)]],
            // country: ['', [Validators.required]],
            // city: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    changeProfileType (val) {
        this.profiles = this.profileTypes[val];
    }

    onSubmit() {
        this.submitted = true;
        // this.form.reset();
        

        if (this.form.invalid) {
            console.log("form invalid");
            return;
        }
        else {
            console.log(console.log(this.form.value))

        }
        
        // this.loading = true;
    }

}
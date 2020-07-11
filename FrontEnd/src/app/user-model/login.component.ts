import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../_services/authentication.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./user-model.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;



  constructor( 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        console.log("form invalid");
        return;
    }
    else {
        console.log(this.form.value)
        /* Authentication from backend to be done here */
        this.authenticationService.login(this.form.value.email, this.form.value.password);
        
        // interface Login {
        //   email: string;
        //   password: string;
        // }


        // this.http.post<Login>('url', {
        //   email: this.form.value.email,
        //   password: this.form.value.password
        // }).subscribe({
        //     next: data => console.log(data),
        //     error: error => console.error(error, "Error during login")
        //     });

        /* Get User details from backend */

    }

}

}

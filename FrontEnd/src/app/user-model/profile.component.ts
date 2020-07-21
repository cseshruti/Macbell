import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from '../_services/responsive.service';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./user-model.component.css']
})
export class ProfileComponent implements OnInit {

    public isMobile: Boolean;
    name = 'abc xyz';
    mobile = "2385075847";
    email = "seriuvyi@shenrh";
    id = "iweu";
    category = "intern";
    firm_name = "-";

    constructor(
        private router: Router,
        private responsiveService: ResponsiveService
    ) { }

    ngOnInit(): void {
        /* get details and update em */
        this.onResize();
        this.responsiveService.checkWidth();
    }

    onSubmit() {
        console.log("Update Profile");
        this.router.navigate(['/updateProfile']);
    }
    onClick(){
        console.log("Update Profile");
        this.router.navigate(['/editProfile']);
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
            console.log(this.isMobile);
        });
    }

}

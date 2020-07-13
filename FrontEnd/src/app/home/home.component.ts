import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../_services/responsive.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public isMobile: Boolean;

    constructor(
        private responsiveService: ResponsiveService
    ) { }

    ngOnInit(): void {
        this.onResize();
        this.responsiveService.checkWidth();
    }

    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
            console.log(this.isMobile);
        });
    }

}

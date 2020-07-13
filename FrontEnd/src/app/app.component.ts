import { Component, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { ResponsiveService } from './_services/responsive.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = "Macbell"

    // public isMobile: Boolean;

    constructor(
        private responsiveService: ResponsiveService
    ) { }

    ngOnInit() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            // this.isMobile = isMobile;
            if (isMobile) {
                console.log('Mobile device detected');
            }
            else {
                console.log('Tablet/Desktop detected');
            }
        });
        this.onResize();
    }

    onResize() {
        this.responsiveService.checkWidth();
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { ResponsiveService } from '../../_services/responsive.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(
     private router: Router,
     private responsiveService: ResponsiveService
  ) {}
   

  ngOnInit(): void {
  }

}

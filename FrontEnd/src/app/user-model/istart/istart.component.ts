import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from 'src/app/_services/responsive.service';

@Component({
  selector: 'app-istart',
  templateUrl: './istart.component.html',
  styleUrls: ['./istart.component.css']
})
export class IstartComponent implements OnInit {

  constructor(
    private router: Router,
    private responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
  }

}

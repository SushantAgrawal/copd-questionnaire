import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMap } from '../app.config';
import { AppService } from '../app.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appService: AppService) {

   }

  ngOnInit() {
  }
  next(){    
    this.router.navigate(['generic1','page1']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMap } from '../app.config';
import { AppService } from '../app.service';

@Component({
  selector: 'app-generic1',
  templateUrl: './generic1.component.html',
  styleUrls: ['./generic1.component.scss']
})
export class Generic1Component implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appService: AppService) {
    activatedRoute
    .params
    .subscribe(param => {
      param.pageName && (this.pageName = param.pageName);
      this.pageObject = navMap[this.pageName];
      this.showPage();
    });
   }
   showPage() {  
   }


  ngOnInit() {
  }
  change(event) {
    debugger;
  }

}

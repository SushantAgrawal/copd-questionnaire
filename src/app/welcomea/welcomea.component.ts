import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urlMaps } from '../app.config';
import { AppService } from '../app.service';

@Component({
  selector: 'app-welcomea',
  templateUrl: './welcomea.component.html',
  styleUrls: ['./welcomea.component.scss']
})
export class WelcomeaComponent implements OnInit {

  name = 'Patient1';
  drName = 'Scott';
  constructor(private router: Router,private appService: AppService) {
    var print = appService.get('queryParams').print;
    print= parseInt(print, 10) 
   
    if(print==1)
    {
      appService.convert(); 
    }
    //appService.convert();
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['generic1', 'page1'], { queryParamsHandling: "merge" });
  }
  exit() {
    window.location.href = urlMaps['B&T:patients'];
  }
}

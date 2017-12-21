import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcomeb',
  templateUrl: './welcomeb.component.html',
  styleUrls: ['./welcomeb.component.scss']
})
export class WelcomebComponent implements OnInit {
  name ='Alice Smith';
  drName= 'Scott';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    // this.router.navigate(['generic1','q1']);
    this.router.navigate(['generic1','page1']);
   }

}

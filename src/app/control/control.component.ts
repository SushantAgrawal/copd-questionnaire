import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navMap} from '../app.config';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    //debugger;
    this.router.navigate(['generic1','page1']);
  }
}

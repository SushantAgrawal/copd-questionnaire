import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navMap } from '../app.config';
import { AppService } from '../app.service';
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {
  @Input() pageObject: any;
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }
  next() {
    let jumpTo;
    jumpTo = this.pageObject.jumpTo;
    this
    .router
    .navigate(['generic1', jumpTo]);

  }
  previous() {
  }  

}

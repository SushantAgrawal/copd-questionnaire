import { Component, OnInit } from '@angular/core';
import {urlMaps} from '../app.config';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent implements OnInit {
  name ='Alice Smith';
  drName= 'Scott';
  constructor() { }

  ngOnInit() {
  }
  exit() {
    window.location.href = urlMaps['B&T:patients'];
  }
}

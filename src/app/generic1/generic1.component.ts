import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMapNP,navMapFU } from '../app.config';
import { AppService } from '../app.service';
import * as _ from "lodash";

@Component({
  selector: 'app-generic1',
  templateUrl: './generic1.component.html',
  styleUrls: ['./generic1.component.scss']
})
export class Generic1Component implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;
  parent: any;
  child1: any;
  progress:any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private appService: AppService) {
     let type= this.appService.get('queryParams').type || 'NP';
    activatedRoute
      .params
      .subscribe(param => {
        param.pageName && (this.pageName = param.pageName);
        this.pageObject =  type=='NP'? navMapNP[this.pageName]:navMapFU[this.pageName];
        this.progress=this.pageObject.progress;
      });
  }
  ngOnInit() {
  }

  getCSSClasses(value) {
    //debugger;
    let cssClass = '';
    let node;
    if (this.pageObject.domain && this.pageObject.domain == 'Clinical Awareness') {
      node = this.pageObject.qustions[value].node;
      if (node && (node == 'parent')) {
        this.parent = this.pageObject.qustions[value].answer_text;
      } else if (node && node == 'child1') {
        this.child1 = this.pageObject.qustions[value].answer_text;
        cssClass = (this.parent == 0) ? 'display-none' : '';
      } else if (node && node == 'child2') {
        cssClass = (this.parent == 0 || this.child1 == 0) ? 'display-none' : '';
      }
    }
    if (this.pageObject.domain && this.pageObject.domain == 'CA-SocialHistory') {
      node = this.pageObject.qustions[value].node;
      if (node && (node == 'parent')) {
        this.parent = this.pageObject.qustions[value].answer_text;
      } else if (node && (node == 'child')) {
        cssClass = (this.parent == 'Yes') ? '' : 'display-none';
      }
    }
    if (this.pageObject.domain && this.pageObject.domain == 'Environment') {
      node = this.pageObject.qustions[value].node;
      if (node && (node == 'parent')) {
        this.parent = this.pageObject.qustions[value].answer_text;
      } else if (node && (node == 'child')) {
        cssClass = (this.parent == 'Yes') ? '' : 'display-none';
      }
    }
    if (this.pageObject.domain && this.pageObject.domain == 'Smoking') {
      node = this.pageObject.qustions[value].node;
      if (node) {
        if (node && (node == 'parent')) {
          this.parent = this.pageObject.qustions[value].answer_text;
        } else if (node == 'child1') {
          cssClass = (this.parent == 'Yes') ? '' : 'display-none';
          this.child1 = this.pageObject.qustions[value].answer_text;
        } else {
          cssClass = (this.parent == 'Yes' && this.child1 == node) ? '' : 'display-none';
        }
      }
    }
    return cssClass;
  }
}

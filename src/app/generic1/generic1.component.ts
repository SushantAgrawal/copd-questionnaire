import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMapNP, navMapFU } from '../app.config';
import { AppService } from '../app.service';
import * as _ from "lodash";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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
  progress: any;
  value: any;
  timeFrame: any=['Days','Weeks','Months','Years'];
  row:any;
  numTimeDueration:any=['1','2','3','4','5','6','7','8','9','10','11 to 15','16 to 20','21 to 25','26 to 30','31+'];
 // month: any  =  [['January', '01'],  ['February', '02'],  ['March', '03'],  ['April', '04'],  ['May', '05'],  ['June', '06'],  ['July', '07'],  ['August', '08'],  ['September', '09'],  ['October', '10'],  ['November', '11'],  ['December', '12']];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private appService: AppService, private _sanitizer: DomSanitizer) {
    let type = this.appService.get('queryParams').type || 'NP';
    activatedRoute
      .params
      .subscribe(param => {
        this.row=0;
        param.pageName && (this.pageName = param.pageName);
        this.pageObject = type == 'NP' ? navMapNP[this.pageName] : navMapFU[this.pageName];
        this.progress = this.pageObject.progress;
        this.value = this._sanitizer.bypassSecurityTrustStyle(`width:${this.progress}%`);
        //this.years = Array.from(new  Array(100), (val,  index)  =>  (new  Date()).getFullYear()  -  index)
      });
  }
  ngOnInit() {
  }

  addValue(option){
    option.checked=!option.checked;
  }
  addRadio(option,item){
    item.answer_text=option.text;
  }
  getCSSClasses(value) {
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

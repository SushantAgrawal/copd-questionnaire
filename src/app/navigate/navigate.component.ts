import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { navMapNP, navMapFU } from '../app.config';
import { AppService } from '../app.service';
import * as _ from "lodash";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {
  @Input() pageObject: any;
  navMap: any;
  constructor(private router: Router, private location: Location, private appService: AppService, private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  next() {
    let jumpTo;
    jumpTo = this.pageObject.jumpTo;
    let isFunc = _.isFunction(this.pageObject.jumpTo);
    let copd, ashtma;

    //debugger;
    if (isFunc) {
      if (this.pageObject.domain && this.pageObject.domain == "controler") {
        this.pageObject.qustions.find(x =>
          (copd = _.find(x.options, ['text', 'COPD'])
          ));
        this.pageObject.qustions.find(x =>
          (ashtma = _.find(x.options, ['text', 'Ashtma'])
          ));
        jumpTo =
          this
            .pageObject
            .jumpTo(copd.checked, ashtma.checked);

      }
      if (this.pageObject.domain && this.pageObject.domain == "CAT") {
        let type = this.appService.get('queryParams').type || 'NP';
        this.navMap = type == 'FU' ? navMapFU : navMapNP;

        let controler = _.find(this.navMap, ['domain', 'controler'])
        controler.qustions.find(x =>
          (ashtma = _.find(x.options, ['text', 'Ashtma'])
          ));
        jumpTo =
          this
            .pageObject
            .jumpTo(ashtma.checked);
      }
    }

    this.saveData();
    if (jumpTo == 'exit') {
      this
        .router
        .navigate([jumpTo]);

    } else {
      this
        .router
        .navigate(['generic1', jumpTo]);
    }
  }

  saveData() {
    let type = this.appService.get('queryParams').type || 'NP';
    this.navMap = type == 'FU' ? navMapFU : navMapNP;
    this.appService.httpPost('questionaires', this.navMap);
  }

  previous() {
    this
      .location
      .back();
  }

  openSnackBar() {
    this.saveData();
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 500,
    });
  }
}

@Component({
  selector: 'snack-bar-component',
  template: `<span class="saveSnackBar">
  Data saved !!!!!
</span>`,
  styles: [`.saveSnackBar { color: hotpink; }`],
})
export class snackBarComponent { }

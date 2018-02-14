import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { utils } from 'protractor';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { welcomeMap, urlMaps } from './app.config';
import * as _ from "lodash";
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { navMapPrint } from './app.config';

@Injectable()
export class AppService {
  global: any = {};
  subject: Subject<any>;
  urlParams: any;
  deviceInfo = null;
  newHeight: number = 40;
  newLeftMargin: number = 15;

  messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root',
    httpGetUnknownError: 'Unknown error encountered while making http request'
  };

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.subject = new Subject();
    let rawParams = decodeURIComponent(window.location.search)
    let urlArray = rawParams.slice(rawParams.indexOf('?') + 1).split('&');
    let urlObject = urlArray.reduce((prevValue, x, i) => {
      let elementArray = x && x.split('=');
      (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
      return (prevValue);
    }, {});
    this.set('queryParams', urlObject);
    let welcome = this.get('queryParams')['type'] || 'NP';
    let print = this.get('queryParams')['print'] || '0';
    welcome = _.toUpper(welcome);
    router.navigate([welcomeMap[welcome]], { queryParams: { type: welcome, print: print } });
  }
  get(id) {
    return (this.global[id]);
  }

  set(id, value) {
    this.global[id] = value;
  }

  convert() {
    var doc = new jsPDF();
    var i = 0;
    const answer1 = 'data:image/png;base64,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';
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(50, 32, 'COPD-SHARE New Patient Questionnaire');

    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.setFontSize(12);
    doc.text(this.newLeftMargin, 50, 'Alice Smith');

    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.text(this.newLeftMargin, 60, '9/21/2017');
    var images = [];
    Object.keys(navMapPrint).map((key) => {
     
      doc.autoTable(this.getColumns(navMapPrint[key].quesitonHeader),
        this.getData(navMapPrint[key].questions, navMapPrint[key].score, navMapPrint[key].quesitonHeader), {
          startY: (i > 0) && doc.autoTable.previous.finalY,
          margin: {
            top: (i == 0) && 70,
          },
          pageBreak: 'avoid',
          theme: 'plain',
          headerStyles: { fillColor: [91, 155, 213] },
          styles: { overflow: 'linebreak' },
          drawCell: function (cell, data) {
            if (data.column.raw.title == 'COPD Assessment Test' &&
              cell.text[0].indexOf("\t-\t")!== -1) {
                cell.text[0]='';
              doc.addImage(answer1, 'PNG', cell.textPos.x, cell.textPos.y);
            }
          },
          createdCell: function (cell, data) {
            console.log(data.column.raw.title);
            if (cell.text[0] && cell.text[0].indexOf('Score:') !== -1) {
              cell.styles.fontStyle = 'bold';
            }
          }
        });
      i++;
    });
    doc.save('Print.pdf');
  }
  getData(questions, score, quesitonHeader) {
    var data = [];
    questions.forEach(element => {
      element.question && data.push({ quesitonHeader: element.question });
      if(element.answer)
      {
        data.push({ quesitonHeader: "\t-\t" + element.answer });
      }else {
        data.push({ quesitonHeader: "\t-\tNo response" });
      }
     
    });
    score && data.push({ quesitonHeader: 'Score: ' + score +' (Sum of all responses)' });
    return data;
  }

  getColumns(quesitonHeader) {
    return [
      { title: quesitonHeader, dataKey: "quesitonHeader" }
    ];
  };
  getUrlParams(rawParams) {
    rawParams = decodeURIComponent(rawParams);
    let urlArray = rawParams.slice(rawParams.indexOf('?') + 1).split('&');
    this.urlParams = urlArray.reduce((prevValue, x, i) => {
      let elementArray = x && x.split('=');
      (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
      return (prevValue);
    }, {});
  }

  setUrlParam(name, value) {
    this.urlParams[name] = value;
  }

  parseURL(url) {
    let parser = document.createElement('a'),
      searchObject = {},
      queries,
      split,
      i;
    parser.href = url;
    // Convert query string to object
    queries = parser
      .search
      .replace(/^\?/, '')
      .split('&');
    for (i = 0; i < queries.length; i++) {
      split = queries[i].split('=');
      searchObject[split[0]] = split[1];
    }
    return { host: parser.host, hostname: parser.hostname, port: parser.port, pathname: parser.pathname, searchObject: searchObject };
  }

  getRoute(url) {
    let urlObject = this.parseURL(url);
    let urlArray = urlObject
      .pathname
      .split('/')
      .filter(x => x);
    let route = (urlArray.length > 0) && (urlArray[urlArray.length - 1]);
    return (route);
  }


  transform() {
    let today = Date.now();
    var datePipe = new DatePipe("en-US");
    let value = datePipe.transform(today, 'yyyy-MM-dd HH:mm:ss');
    return value;
  }

  emit(id: string, options?: any) {
    this
      .subject
      .next({ id: id, data: options });
  };

  filterOn(id: string): Observable<any> {
    return (this.subject.filter(d => (d.id === id)));
  };

  httpPost(id: string, body?: {}, queryParams?: {}) {

    // let baseUrl = environment
    //   .maestroBaseUrl
    //   .replace(/\/$/, '');
    // let path = environment.maestroPath;
    let url = urlMaps[id];
    if (queryParams) {
      let httpParams = new HttpParams();
      httpParams = Object
        .keys(queryParams)
        .reduce((prev, x, i) => {
          httpParams = httpParams.append(x, queryParams[x]);
          return (httpParams);
        }, httpParams);
      queryParams = httpParams;
    }
    this
      .httpClient
      .post(url, body, { params: queryParams })
      .subscribe(d => {
        this
          .subject
          .next({ id: id, data: d, body: body });
      }, err => {
        if (err.status && ((err.status == 200) || (err.status == 404))) {
          this
            .subject
            .next({ id: id, redirectUrl: err.url })
        } else {
          this
            .subject
            .next({ id: id, error: err });
        }
      });
  };

  httpGet(id: string, queryParams?: {}) {
    try {
      let baseUrl = '';
      // environment
      //   .maestroBaseUrl
      //   .replace(/\/$/, '');
      // let path = environment.maestroPath;
      let url = urlMaps[id];
      let httpParams = new HttpParams();
      httpParams = queryParams && (Object.keys(queryParams).reduce((prevValue, x, i) => {
        httpParams = httpParams.append(x, queryParams[x]);
        return (httpParams);
      }, httpParams));
      httpParams = httpParams ? httpParams.append("random", Math.random().toString()) : new HttpParams().append("random", Math.random().toString());
      if (url) {
        this
          .httpClient
          .get(url, { params: httpParams })
          .subscribe(d => {
            this
              .subject
              .next({ id: id, data: d });
          }, err => {
            this.subject.next({ id: id, error: err });
          });
      } else {
        this
          .subject
          .next({ id: id, error: this.messages.idNotMappedToUrl })
      }
    } catch (err) {
      this
        .subject
        .next({ id: id, error: this.messages.httpGetUnknownError })
    }
  }
}

// deprecated getSettings() {   this.httpClient     .get('assets/settings.json')
//     .subscribe(d => {       let env = (d as any).env;       let allEnvs = (d
// as any).allEnvs;       // this.settings = allEnvs[env];     }, err => {
// console.log(err);     }); } httpPost1(id: string, body?: any) {   let url =
// urlMaps[id];   // let headers = new Headers(); headers.append('Content-Type',
//   //   'application/json'); var headers = new Headers();
// headers.append('Content-Type', 'application/x-www-form-urlencoded');   let
// urlSearchParams = new URLSearchParams();   urlSearchParams.append('email',
// 'username'); urlSearchParams.append('password', 'password');   body =
// urlSearchParams.toString()   // body = { "name": "sss" };   this     .http
// .post(url, body, { headers: headers })     .subscribe(d => {       this
// .subject         .next({ id: id, data: d, body: body });     }, err => { if
// (err.status && ((err.status == 200) || (err.status == 404))) { this .subject
//       .next({ id: id, redirectUrl: err.url })   } else {    this .subject
//  .next({ id: id, error: err });       }   }); }; httpGet(id : string,
// queryParams?: {     name: string,     value: string }[], headers?: [any],
// carryBag?: any) {     try {       let url = urlMaps[id];   let myParams = new
// URLSearchParams();       queryParams && (queryParams.map(x =>
// myParams.append(x.name, x.value)));       let myHeaders = new Headers();
// headers && (headers.map(x => myHeaders.append(x.name, x.value)));       let
// options; // (headers || queryParams) && (options = new RequestOptions({
// headers : // headers     ? myHeaders     : null, params: queryParams ?
// myParams         :         null }));         if (url) {       this
// .httpClient           .get(url, options) .map(response => response.json())
//  .subscribe(d => {           this           .subject .next({id: id, data: d,
// carryBag: carryBag});        }, err => { this             .subject .next({id:
// id, error: err});         });     } else {       this .subject     .next({id:
// id, error: messages.idNotMappedToUrl});     }   } catch (err) {     this
// .subject .next({id: id, error: messages.httpGetUnknownError});   } };
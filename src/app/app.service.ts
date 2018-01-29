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

  constructor( private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
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
    welcome = _.toUpper(welcome);
    router.navigate([welcomeMap[welcome]] , { queryParams: { type: welcome } });
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
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(50, 32, 'COPD-SHARE New Patient Questionnaire');

    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(this.newLeftMargin, 50, 'Alice Smith');

    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.text(this.newLeftMargin, 60, '9/21/2017');

    Object.keys(navMapPrint).map((key) => {
      console.log(navMapPrint[key].quesitonHeader)
      doc.autoTable(this.getColumns(navMapPrint[key].quesitonHeader),
        this.getData(navMapPrint[key].questions, navMapPrint[key].quesitonHeader), {
          startY: (i > 0) && doc.autoTable.previous.finalY,
          margin: {
              top: (i == 0) && 70,
          },
          //startY: doc.autoTable.previous.finalY,
          pageBreak: 'avoid',
          theme: 'plain',
          headerStyles: { fillColor: [91, 155, 213] }
        });
      i++;
    });
    doc.save('Print.pdf');
  }
  getData(questions, quesitonHeader) {
    var data = [];
    questions.forEach(element => {
      element.question && data.push({ quesitonHeader: element.question });
      element.answer && data.push({ quesitonHeader: "\t-\t" + element.answer });
    });
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
      httpParams= httpParams?httpParams.append("random",Math.random().toString()):new HttpParams().append("random",Math.random().toString());
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
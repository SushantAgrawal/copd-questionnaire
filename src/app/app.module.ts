import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppService} from './app.service';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { Generic1Component } from './generic1/generic1.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ControlComponent } from './control/control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Generic1Component,
    NavigateComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,RouterModule.forRoot(ROUTES, {useHash: true}), HttpModule,AngularMaterialModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { Generic1Component } from './generic1/generic1.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ControlComponent } from './control/control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { WelcomeaComponent } from './welcomea/welcomea.component';
import { WelcomebComponent } from './welcomeb/welcomeb.component';


@NgModule({
  declarations: [
    AppComponent,
    Generic1Component,
    NavigateComponent,
    ControlComponent,
    WelcomeaComponent,
    WelcomebComponent
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,RouterModule.forRoot(ROUTES), HttpClientModule,AngularMaterialModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

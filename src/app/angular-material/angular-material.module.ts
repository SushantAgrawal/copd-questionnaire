import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,MatButtonToggleModule,MatRadioModule,MatCheckboxModule
  ],
  exports: [MatButtonToggleModule,MatRadioModule,MatCheckboxModule],
  declarations: []
})
export class AngularMaterialModule { }

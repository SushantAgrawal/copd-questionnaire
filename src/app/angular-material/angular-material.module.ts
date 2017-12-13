import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,MatButtonToggleModule,MatRadioModule
  ],
  exports: [MatButtonToggleModule,MatRadioModule],
  declarations: []
})
export class AngularMaterialModule { }

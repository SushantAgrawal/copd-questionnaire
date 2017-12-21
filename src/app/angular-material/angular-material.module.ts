import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatSelectModule,MatProgressBarModule,CommonModule,MatButtonToggleModule,MatRadioModule,MatCheckboxModule,MatCardModule,MatButtonModule
  ],
  exports: [MatSelectModule,MatProgressBarModule,MatButtonToggleModule,MatRadioModule,MatCheckboxModule,MatCardModule,MatButtonModule],
  declarations: []
})
export class AngularMaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
@NgModule({
  imports: [
    MatDatepickerModule, MatNativeDateModule,MatSnackBarModule, MatSelectModule,MatProgressBarModule,CommonModule,MatButtonToggleModule,MatRadioModule,MatCheckboxModule,MatCardModule,MatButtonModule
  ],
  exports: [MatDatepickerModule, MatNativeDateModule,MatSnackBarModule,MatSelectModule,MatProgressBarModule,MatButtonToggleModule,MatRadioModule,MatCheckboxModule,MatCardModule,MatButtonModule],
  declarations: []
})
export class AngularMaterialModule { }

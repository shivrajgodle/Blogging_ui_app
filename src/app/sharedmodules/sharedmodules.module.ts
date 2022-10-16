import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {MessageModule} from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    MessageModule,
    HttpClientModule,
    ToastModule,
    MatSnackBarModule,
    MatProgressBarModule
    
    
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    MessageModule,
    HttpClientModule,
    ToastModule,
    MatSnackBarModule,
    MatProgressBarModule
  ]
})
export class SharedmodulesModule { }

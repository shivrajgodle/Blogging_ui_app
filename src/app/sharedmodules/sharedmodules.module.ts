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
import {DropdownModule} from 'primeng/dropdown';

import {EditorModule} from 'primeng/editor';


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
    MatProgressBarModule,
    EditorModule,
    DropdownModule
    
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
    MatProgressBarModule,
    EditorModule,
    DropdownModule
  ]
})
export class SharedmodulesModule { }

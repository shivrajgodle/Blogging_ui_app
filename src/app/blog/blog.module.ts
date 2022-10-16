import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedmodulesModule } from '../sharedmodules/sharedmodules.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedmodulesModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BlogModule { }

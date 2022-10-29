import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedmodulesModule } from '../sharedmodules/sharedmodules.module';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'post',
    component:PostComponent
  }
  
]


@NgModule({
  declarations: [
    HomeComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedmodulesModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BlogModule { }

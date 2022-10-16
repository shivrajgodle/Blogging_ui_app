import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: "", redirectTo: "auth/login", pathMatch: 'full' },
  {
    path:"auth",
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"blog",
    loadChildren:() => import('./blog/blog.module').then(m => m.BlogModule)
  }
];

// import('./auth/auth.module').then(m => m.AuthModule)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AddCoursesPageComponent} from './add-courses-page/add-courses-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: HomePageComponent
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    component: AddCoursesPageComponent
  },
  {
    path: 'courses/new',
    canActivate: [AuthGuard],
    component: AddCoursesPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    //  enableTracing: true,
      // useHash: true
      // preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

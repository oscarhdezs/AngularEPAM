import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseReducer} from './reducers/courses.reducer';
import {AuthenticateReducer} from './reducers/authenticate.reducer';
import { ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseDirective } from './directives/course.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import {CoreModule} from './core/core.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCoursesPageComponent } from './add-courses-page/add-courses-page.component';
import { DateComponent } from './date/date.component';
import { DurationComponent } from './duration/duration.component';
import { AuthorsComponent } from './authors/authors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoadingScreenInterceptor } from './loading.interceptor/loading.interceptor';
import {environment} from '../environments/environment';
import {AuthEffect} from './effects/auth.effect';
import {CoursesEffect} from './effects/courses.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    CoursesPageComponent,
    CourseDirective,
    DurationPipe,
    OrderByPipe,
    LoginPageComponent,
    CoursesListComponent,
    AddCoursesPageComponent,
    DateComponent,
    DurationComponent,
    AuthorsComponent,
    NotFoundComponent,
    HomePageComponent,
    LoadingScreenComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({courses: CourseReducer, authenticate: AuthenticateReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AuthEffect, CoursesEffect]),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    CoreModule.forRoot({ storage: sessionStorage})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

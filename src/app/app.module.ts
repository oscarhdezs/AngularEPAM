import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmationPopoverModule} from 'angular-confirmation-popover';

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
  ],
  imports: [
    BrowserModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    CoreModule.forRoot({ storage: sessionStorage})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

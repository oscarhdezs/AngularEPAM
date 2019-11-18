import {Component, Inject, OnInit} from '@angular/core';
import {CourseService} from './service/course/course.service';
import {APP_STORAGE} from './core/core.module';
import {AuthorizationService} from './service/authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  constructor(private courseService: CourseService,
              private authService: AuthorizationService,
              @Inject(APP_STORAGE) private  storage) {}

  courses = [];
  authenticated ;
  title = 'task1';

  ngOnInit(): void {
    this.courses = this.courseService.getList();
    this.authenticated = this.authService.isAuthenticated();
    console.log('is ?' + this.authenticated);
  }

}

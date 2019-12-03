import {Component, Inject, OnInit} from '@angular/core';
import {CourseService} from '../service/course/course.service';
import {AuthorizationService} from '../service/authorization/authorization.service';
import {APP_STORAGE} from '../core/core.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  courses = [];
  authenticated ;
  title = 'task1';
  isAddCourse: boolean;

  constructor(private courseService: CourseService,
              private authService: AuthorizationService,
              @Inject(APP_STORAGE) private  storage) { }

  ngOnInit() {
    this.courses = this.courseService.getList();
    this.authenticated = this.authService.isAuthenticated();
    console.log('is ?' + this.authenticated);
    this.isAddCourse = false;
  }

  logout(): void {
    console.log('Event emmited');
    this.authService.logout();
    this.authenticated = this.authService.isAuthenticated();
  }

  addCourse() {
    this.isAddCourse = true;
  }
}

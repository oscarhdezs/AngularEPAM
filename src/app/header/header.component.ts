import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseService} from '../service/course/course.service';
import {Course} from '../model/course';
import {AuthorizationService} from '../service/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() logoutEvent = new EventEmitter<string>();
  course: Course;
  isAuth: boolean;
  userName: string;
  constructor(private courseService: CourseService,
              private authService: AuthorizationService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated() === 'true' ? true : false;
    console.log('is Auth:' + this.isAuth);
  }

  addCourse() {
    console.log('Create course...');
    this.course = new Course('Video Course 4. Dependency Injection',  700, new Date(2019, 11, 18),
      'Learn how to use the dependency injenction, the module, the service and implements', true);
    this.courseService.createCourse(this.course);
    this.userName = this.authService.getUserInfo();
    console.log('user:' + this.userName);
  }
  filter() {
    console.log('Filtrando');
  }
  logout() {
    console.log('Logout');
    this.logoutEvent.emit('logout');
//    this.authService.logout();
    this.isAuth = !this.isAuth;
  }
}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseService} from '../service/course/course.service';
import {Course} from '../model/course';
import {AuthorizationService} from '../service/authorization/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() logoutEvent = new EventEmitter<string>();
  @Output() isAddCourse = new EventEmitter<boolean>();
  course: Course;
  isAuth: boolean;
  userName: string;
  constructor(private courseService: CourseService,
              private authService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated() === 'true' ? true : false;
    console.log('is Auth:' + this.isAuth);
  }

  addCourse() {
    this.router.navigate(['courses/new']);
  }
  filter() {
    console.log('Filtrando');
  }
  logout() {
    console.log('Logout');
    this.logoutEvent.emit('logout');
    this.isAuth = !this.isAuth;
    this.router.navigate(['login']);
  }
}

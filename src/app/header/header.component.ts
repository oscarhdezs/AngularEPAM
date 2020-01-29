import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CourseService} from '../service/course/course.service';
import {AuthorizationService} from '../service/authorization/authorization.service';
import {Router} from '@angular/router';
import {Courses} from '../model/courses';
import {Observable, Subject, Subscription} from 'rxjs';
import {debounceTime, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() logoutEvent = new EventEmitter<string>();
  @Output() isAddCourse = new EventEmitter<boolean>();
  @Output() searchCourse = new EventEmitter<Courses[]>();

  searchSubject = new Subject<KeyboardEvent>();
  searchSubscription: Subscription;

  courses: Courses[] = [];
  isAuth: boolean;
  userName: string;

  constructor(private courseService: CourseService,
              private authService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated() === 'true' ? true : false;
    console.log('is Auth:' + this.isAuth);
    this.authService.getUserInfo().subscribe( (userInfo) => {
      this.userName = userInfo['name'].first;
    } );
    this.searchSubscription =  this.searchSubject.asObservable()
      .pipe(
        debounceTime(300),
        map( event => {
          return event.target['value'];
        }),
        filter( value => value.length > 3)
      ).subscribe((value) => {
        this.courses = this.courseService.getListSearch(5, value);
        this.searchCourse.emit(this.courses);
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  addCourse() {
    this.router.navigate(['courses/new']);
  }
  logout() {
    console.log('Logout');
    this.logoutEvent.emit('logout');
    this.isAuth = !this.isAuth;
    this.router.navigate(['login']);
  }
}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../service/course/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPageComponent implements OnInit {
  constructor() { }
  @Input() courses;
  ngOnInit() {
  }

  loadMore() {
    console.log('loading more content');
  }
}

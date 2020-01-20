import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../service/course/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPageComponent implements OnInit {
  count: number;
  constructor(private courseService: CourseService) { }
  @Input() courses;
  ngOnInit() {
    this.count = 5;
  }

  loadMore() {
    this.count = this.count + 3;
    this.courses = this.courseService.getList(this.count);
    console.log('loading more content');
  }
}

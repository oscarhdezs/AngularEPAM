import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../service/course/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  @Input() courses;
  popOverTitle = 'Course Delete Confirmation';
  popOverMessage = 'Are you sure want remove this course?';

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  loadMore() {
    console.log('loading more content');
  }
  edit() {
    console.log('edit content');
  }
  delete(id: number) {
    console.log('delete content', id);
    this.courseService.removeItem(id);

  }
}

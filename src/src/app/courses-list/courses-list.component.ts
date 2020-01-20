import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../service/course/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {

  @Input() courses;
  popOverTitle = 'Course Delete Confirmation';
  popOverMessage = 'Are you sure want remove this course?';

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    console.log(console);
  }

  edit() {
    console.log('edit content');
  }
  delete(id: number) {
    console.log('delete content', id);
   // this.courseService.removeItem(id);
    this.courseService.deleteCourse( id ).subscribe();
  }
}

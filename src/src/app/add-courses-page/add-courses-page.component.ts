import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../service/course/course.service';
import {Courses} from '../model/courses';
import {Author} from '../model/author';
// import {Courseso} from '../model/course';

@Component({
  selector: 'app-add-courses-page',
  templateUrl: './add-courses-page.component.html',
  styleUrls: ['./add-courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursesPageComponent implements OnInit {
  id: number;
  title: string;
  description: string;
  date: Date;
  dateStr: string;
  duration: number;
  authors: Author;
  course: Courses;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.route.params.subscribe((routeParams) => {
      this.id = routeParams.id;
    });
    this.course =  this.courseService.getItemById(this.id);
    if ( this.course) {
      this.fillCourse(this.course);
    }
  }

  fillCourse(course: Courses): void {
    this.id = course.get_id();
    this.title = course.get_title();
    this.date = course.get_date();
    this.duration = course.get_duration();
    this.description = course.get_description();
    this.authors = course.get_author();
  }
  fillToCourse(): void {
    const dateSplit = this.dateStr.split('.');
    this.course = new Courses(
      this.id,
      this.title,
      this.description,
      false,
      new Date(parseInt(dateSplit[0], 10), parseInt(dateSplit[1], 10), parseInt(dateSplit[2], 10)),
      this.duration,
      this.authors
    );
  }
  save() {
    this.fillToCourse();
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe();
  //  this.courseService.createCourse(this.course);
    this.router.navigate(['courses']);
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../service/course/course.service';
import {Courses} from '../model/courses';
import {Store} from '@ngrx/store';
import {CourseAdd} from '../actions/course.actions';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-courses-page',
  templateUrl: './add-courses-page.component.html',
  styleUrls: ['./add-courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCoursesPageComponent implements OnInit {
  form: FormGroup;
  id: number;
  duration: number;
  course: Courses;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private store: Store<{courses: Courses[]}> ) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.maxLength(50), Validators.required ]),
      description: new FormControl('', [Validators.maxLength(500), Validators.required]),
      dateStr: new FormControl('', [Validators.required, exprValidator(/^(\d{1,2})-(\d{1,2})-(\d{4})$/)]),
      duration: new FormControl('', [Validators.required, exprValidator(/^[0-9]+$/)]),
      authors: new FormControl('', Validators.required)
    });
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
    this.id = course.id;
    this.duration = course.length;
    this.form.get('title').setValue(course.name);
    this.form.get('description').setValue(course.description);
    this.form.get('dateStr').setValue(course.date);
    this.form.get('duration').setValue(course.length);
    this.form.get('authors').setValue(course.author);
  }
  fillToCourse(): void {
    const dateSplit = this.form.get('dateStr').value.split('.');
    this.course = new Courses(
      this.id,
      this.form.get('title').value,
      this.form.get('description').value,
      false,
      new Date(parseInt(dateSplit[0], 10), parseInt(dateSplit[1], 10), parseInt(dateSplit[2], 10)),
      this.form.get('duration').value,
      this.form.get('authors').value
    );
  }
  save() {
    this.fillToCourse();
    console.log(this.course);
    this.store.dispatch(new CourseAdd(this.course));
    this.router.navigate(['courses']);
  }
}

function exprValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

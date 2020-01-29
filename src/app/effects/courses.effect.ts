import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {CourseService} from '../service/course/course.service';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CourseActionTypes} from '../shared/enums/course-action.types.enum';
import {switchMap, map, concatMap, mergeMap, catchError} from 'rxjs/operators';
import {CourseLoad, CourseLoadError, CourseLoadSuccess} from '../actions/course.actions';
import {of} from 'rxjs';

@Injectable()
export class CoursesEffect {
  constructor(private actions$: Actions,
              private courseService: CourseService,
              private router: Router) {
  }

loadCourse = createEffect(() => {
  return this.actions$.pipe(
    ofType(CourseActionTypes.List),
    mergeMap( () => this.courseService.getList(5).pipe(
      map((courses) => {
      return new CourseLoadSuccess(courses);
    }),
      catchError(() => of(new CourseLoadError([])))
    ))
  );
});

}

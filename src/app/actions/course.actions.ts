import {Action} from '@ngrx/store';
import {CourseActionTypes} from '../shared/enums/course-action.types.enum';


export class ActionParent implements Action {
  type: any;
  payload: any;
}

export class CourseAdd implements  ActionParent {
  type = CourseActionTypes.Add;
  constructor(public payload: any) {}
}

export class CourseEdit implements  ActionParent {
  type = CourseActionTypes.Edit;
  constructor(public payload: any) {}
}

export class CourseLoad implements  Action {
  type = CourseActionTypes.List;
  constructor() {
  }
}

export class CourseLoadSuccess implements  ActionParent {
  type = CourseActionTypes.Success;

  constructor(public payload: any) {
  }
}

export class CourseLoadError implements  ActionParent {
  type = CourseActionTypes.Error;

  constructor(public payload: any) {
  }
}

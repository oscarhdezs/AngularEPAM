import {Courses} from '../model/courses';
import {ActionParent} from '../actions/course.actions';
import {CourseActionTypes} from '../shared/enums/course-action.types.enum';


const initialState: Courses[] = [];

export function CourseReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case CourseActionTypes.Add:
      return [...state, action.payload];
    case CourseActionTypes.Edit:
      return [...state, action.payload];
    case CourseActionTypes.Success:
      return action.payload;
    default: return state;
  }
}

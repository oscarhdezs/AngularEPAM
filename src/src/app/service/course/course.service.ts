import {Inject, Injectable} from '@angular/core';
import {Course} from '../../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  courses = [
    new Course('Video Course 1. Tag Name', 120, new Date(2019, 10, 13),
      'Learn how to use the Tag Name attribute', true),
    new Course('Video Course 2. Hook LifeCycle', 180, new Date(2019, 12, 12),
      'Learn how to implements the hook lifecycle in our components', false),
    new Course('Video Course 3. Components',  400, new Date(2019, 1, 15),
      'Learn how to create components using the cli utility', true)
  ];

  getList() {
    console.log('get All list');
    return this.courses;
  }

  createCourse(course: Course) {
    console.log('Create course');
    this.courses.push(course);
  }

  getItemById(id: number): Course {
    console.log('get Item By Id');
    return this.courses[id];
  }

  updateItem() {
    console.log('Update Item');
  }

  removeItem(id: number): void {
    console.log(this.courses);
    console.log('Remove Item');
    this.courses.splice(id, 1);
    console.log(this.courses);
  }
}

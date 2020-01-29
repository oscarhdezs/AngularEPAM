import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Courses} from '../../model/courses';
import { Observable } from 'rxjs';
import {Author} from '../../model/author';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private httpClient: HttpClient) { }
  public courses: Courses[] = [];

  getList(count: number): Observable<Courses[]> {
    console.log('get All list');
    return this.httpClient.get<Courses[]>('http://localhost:3004/courses/?start=0&count=' + count);
  }

  getListSearch(count: number, search: string) {
    console.log('get All list search---->');
    this.httpClient.get('http://localhost:3004/courses/?start=0&count=' + count + '&textFragment=' + search)
      .subscribe((items: Courses[]) => {
        this.courses = items;
        console.log(items);
      });
    return this.courses;
  }

  deleteCourse(id: number): Observable<{}> {
    console.log('Delete course id:' + id);
    return this.httpClient.delete('http://localhost:3004/courses/' + id);
  }

  addCourse(course: Courses): Observable<Courses> {
    const id = course.id;
    const name = course.name;
    const date = course.date;
    const length = course.length;
    const isTopRated = course.isTopRated;
    const author = Author;
    return this.httpClient.post<Courses>('http://localhost:3004/courses/', {id, name , date, length, author, isTopRated});
  }
  getItemById(id: number): Courses {
    console.log('get Item By Id');
    return this.courses[id];
  }

  updateItem() {
    console.log('Update Item');
  }
}

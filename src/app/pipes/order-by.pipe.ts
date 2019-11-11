import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: [], ...args: any[]): any {
    courses.sort(( a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime(); } );
    return courses;
  }

}

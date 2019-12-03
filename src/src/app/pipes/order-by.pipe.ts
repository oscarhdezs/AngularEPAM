import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: [], ...args: any[]): any {
    courses.sort(( a, b) => {
      return new Date(a).getTime() - new Date(b).getTime(); } );
    return courses;
  }

}

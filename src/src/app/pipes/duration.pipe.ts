import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number, ...args: any[]): any {
      if ( duration < 60 ) {
        return '1h';
      } else {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return hours + 'h ' + minutes + 'min';
      }

      return null;
  }
}

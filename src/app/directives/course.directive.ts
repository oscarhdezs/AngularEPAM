import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCourse]'
})
export class CourseDirective {



  constructor(private el: ElementRef, private render: Renderer2) {
    const creationDate = new Date(2019, 9, 21);
    const currentDate = new Date();
    const currentLess14 =  new Date();
    currentLess14.setDate(currentLess14.getDate() - 14);
    if ( creationDate < currentDate && creationDate >= currentLess14) {
      this.render.setStyle(this.el.nativeElement, 'border-color', 'green');
    } else {
      this.render.setStyle(this.el.nativeElement, 'border-color', 'blue');
    }
    this.render.setStyle(this.el.nativeElement, 'border-style', 'solid');
  }

}

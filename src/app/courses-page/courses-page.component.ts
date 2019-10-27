import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  @Input() courses;

  constructor() { }

  ngOnInit() {
  }

  loadMore() {
    console.log('loading more content');
  }
  edit() {
    console.log('edit content');
  }
  delete() {
    console.log('delete content');
  }
}

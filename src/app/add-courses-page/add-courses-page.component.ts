import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-courses-page',
  templateUrl: './add-courses-page.component.html',
  styleUrls: ['./add-courses-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursesPageComponent implements OnInit {

  title: string;
  description: string;
  date: string;
  duration: number;
  authors: string;
  constructor() { }

  ngOnInit() {
    this.duration = 110;
  }

  save() {
    console.log('Save Course');
  }
  cancel() {
    console.log('Cancel Course');
  }
}

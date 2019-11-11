import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';

  courses = [{title: 'Video Course 1. Tag Name',
    duration: 120,
    date: new Date(2019, 10, 13),
    description: 'Learn how to use the Tag Name attribute',
    topRated: true},
    {title: 'Video Course 2. Hook LifeCycle',
      duration: 180,
      date: new Date(2019, 12, 12),
      description: 'Learn how to implements the hook lifecycle in our components',
      topRated: false},
    {title: 'Video Course 3. Components',
      duration: 400,
      date: new Date(2019, 1, 15),
      description: 'Learn how to create components using the cli utility',
      topRated: true}];
}

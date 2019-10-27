import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';

  courses = [{title: 'Video Course 1. Tag Name',
    duration: '1:28',
    date: '3 nov 2019',
    description: 'Learn how to use the Tag Name attribute'},
    {title: 'Video Course 2. Hook LifeCycle',
      duration: '5:28',
      date: '12 dic 2019',
      description: 'Learn how to implements the hook lifecycle in our components'},
    {title: 'Video Course 3. Components',
      duration: '14:28',
      date: '15 jan 2019',
      description: 'Learn how to create components using the cli utility'}];
}

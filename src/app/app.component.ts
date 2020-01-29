import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log('event--->:' + event);
    });
  }
  ngOnInit(): void {
  }
}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {

  @Input() date: string;
  constructor() { }

  ngOnInit() {
  }

}

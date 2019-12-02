import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursesPageComponent } from './add-courses-page.component';

describe('AddCoursesPageComponent', () => {
  let component: AddCoursesPageComponent;
  let fixture: ComponentFixture<AddCoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

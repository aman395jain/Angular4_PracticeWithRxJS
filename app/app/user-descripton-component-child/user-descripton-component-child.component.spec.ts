import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescriptonComponentChildComponent } from './user-descripton-component-child.component';

describe('UserDescriptonComponentChildComponent', () => {
  let component: UserDescriptonComponentChildComponent;
  let fixture: ComponentFixture<UserDescriptonComponentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDescriptonComponentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDescriptonComponentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

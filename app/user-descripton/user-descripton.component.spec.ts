import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescriptonComponent } from './user-descripton.component';

describe('UserDescriptonComponent', () => {
  let component: UserDescriptonComponent;
  let fixture: ComponentFixture<UserDescriptonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDescriptonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDescriptonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

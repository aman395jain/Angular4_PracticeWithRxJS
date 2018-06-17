import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservePageComponent } from './observe-page.component';

describe('ObservePageComponent', () => {
  let component: ObservePageComponent;
  let fixture: ComponentFixture<ObservePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

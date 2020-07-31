import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregistrationComponent } from './viewregistration.component';

describe('ViewregistrationComponent', () => {
  let component: ViewregistrationComponent;
  let fixture: ComponentFixture<ViewregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

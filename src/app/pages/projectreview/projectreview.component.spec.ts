import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectreviewComponent } from './projectreview.component';

describe('ProjectreviewComponent', () => {
  let component: ProjectreviewComponent;
  let fixture: ComponentFixture<ProjectreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

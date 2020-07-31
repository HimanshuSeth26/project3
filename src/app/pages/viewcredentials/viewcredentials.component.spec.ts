import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcredentialsComponent } from './viewcredentials.component';

describe('ViewcredentialsComponent', () => {
  let component: ViewcredentialsComponent;
  let fixture: ComponentFixture<ViewcredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

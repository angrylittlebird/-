import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTabComponentComponent } from './scrollable-tab-component.component';

describe('ScrollableTabComponentComponent', () => {
  let component: ScrollableTabComponentComponent;
  let fixture: ComponentFixture<ScrollableTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

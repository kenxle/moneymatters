import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepFilterComponent } from './rep-filter.component';

describe('RepFilterComponent', () => {
  let component: RepFilterComponent;
  let fixture: ComponentFixture<RepFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

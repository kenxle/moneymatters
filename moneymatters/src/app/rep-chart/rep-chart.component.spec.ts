import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepChartComponent } from './rep-chart.component';

describe('RepChartComponent', () => {
  let component: RepChartComponent;
  let fixture: ComponentFixture<RepChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

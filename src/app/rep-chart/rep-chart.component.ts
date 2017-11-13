import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Rep } from '../rep/rep';
import { REPS } from '../rep/mock-reps';
import { RepService } from '../rep/rep.service';

@Component({
  selector: 'app-rep-chart',
  templateUrl: './rep-chart.component.html',
  styleUrls: ['./rep-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepChartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
      let svg = d3.select('svg');
      console.log('svg');
  }

}

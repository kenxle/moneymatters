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
      let createNodes = function(numNodes, radius) {

      }
      let svg = d3.select('svg');
      var circles = function() {
        for (let i = 0; i < REPS.length; i++) {
          svg.append("circle").attr("cx", i + 1 * 30).attr("cy", 100);
        }
      }
      var arc = d3.arc()
      .innerRadius(50)
      .outerRadius(150)
      .startAngle(0)
      .endAngle(Math.PI);


      circles();
      svg.append("path").attr("d", arc).attr("transform", "translate(200, 200)")
      // .attr("transform", "rotate(-90)")
  }
}

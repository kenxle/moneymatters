import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Rep } from '../rep/rep';
import { REPS } from '../rep/mock-reps';
import { RepService } from '../rep/rep.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-rep-chart',
  templateUrl: './rep-chart.component.html',
  styleUrls: ['./rep-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepChartComponent implements OnInit {
  constructor() { }

  ngOnInit() {

      let svg;
      let houseRows = [
        28,
        30,
        33,
        37,
        41,
        45,
        49,
        53,
        58,
        60
      ];
      let createNodes = function(nodeBase, radius) {
        var nodes = [],
             angle,
             x,
             y,
             i,
             party,
             radius = radius,
             width,
             height;
         for(let j = 0; j < nodeBase.length; j++) {
           radius = radius - j*20;
           width = (radius * 2) + 50;
           height = (radius * 2) + 50;
           for (i=0; i<nodeBase[j]; i++) {
            angle = (i / nodeBase[j]) * Math.PI; // Calculate the angle at which the element will be placed.
                                             // For a semicircle, we would use (i / numNodes) * Math.PI.
            x = (radius * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
            y = (radius * Math.sin(angle)) + (width/2); // Calculate the y position of the element.
            party = (i % 2 === 0) ? "Dem" : "Rep";
            nodes.push({'id': i, 'x': x, 'y': y, 'party': party });
           }
         }
         return nodes;
      }
      var createSvg = function (radius, callback) {
        d3.selectAll('svg').remove();
         svg = d3.select('#canvas').append('svg:svg')
                    .attr('width', (radius * 2) + 50)
                    .attr('height', (radius * 2) + 50);
         callback(svg);
       }
       var colorParties = function(svg, nodes) {
         let elements = svg.selectAll('circle')
                         .data(nodes)
                         .filter(function(d) { return (d.party === "Dem") })
                         .style("fill", "blue");
       }

       var createElements = function (svg, nodes, elementRadius) {
          console.log(`creating ${nodes} elements`);
          let element = svg.selectAll('circle')
                         .data(nodes)
                         .enter().append('svg:circle')
                         .attr('r', elementRadius)
                         .attr('cx', function (d, i) {
                           return d.x;
                         })
                         .attr('cy', function (d, i) {
                           return d.y;
                         });

        colorParties(svg, nodes);
      }
      // appendElements = function(svg, nodes, elementRadius) {
      //
      // }

      var draw = function (numnode, rad) {
         var numNodes = numnode || 100;
         var radius = rad || 200;
         var nodes = createNodes(numNodes, radius);
         createSvg(radius, function (svg) {
           createElements(svg, nodes, 5);
         });
       }

       var appendDraw = function(numnode, rad) {
         var numNodes = numnode || 50;
         var radius = rad || 200;
         var nodes = createNodes(houseRows, radius);
         createElements(svg, nodes, 5);
       }

       $(document).ready(function() {
           draw(houseRows, 200);
           // draw(40, 150);
       });
  }
}

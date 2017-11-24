import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Rep } from '../rep/rep';
import { REPS } from '../rep/mock-reps';
import { ChartService } from '../services/chartservice';
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
    // ChartService.instantiate();
    let svg;
    let houseRows = [60, 58, 53, 49, 45, 41, 37, 33, 30, 28];
    // [37, 33, 30, 28];
    // 33, 37, 41, 45, 49, 53, 58, 60
    let createHouseNodes = function(nodeBase, radius) {
      var nodes = [],
        angle,
        x,
        y,
        i,
        party,
        radius = radius,
        width,
        height;
      for (let j = 0; j < nodeBase.length; j++) {
        let localradius = (radius) - 15 * (j + 1);
        console.log(localradius);
        width = (localradius) + 100;
        height = radius + 50;
        for (i = 0; i < nodeBase[j]; i++) {
          angle = (i / nodeBase[j]) * Math.PI; // Calculate the angle at which the element will be placed.
          // For a semicircle, we would use (i / numNodes) * Math.PI.
          x = -1 * (localradius * Math.cos(angle)) + (15 * j) + (width); // Calculate the x position of the element.
          y = -1 * (localradius * Math.sin(angle)) + (height); // Calculate the y position of the element.
          party = (i % 2 === 0) ? "Dem" : "Rep";
          nodes.push({ 'id': i, 'x': x, 'y': y, 'party': party });
        }
      }
      return nodes;
    }
    var createSvg = function(radius, callback) {
      d3.selectAll('svg').remove();
      svg = d3.select('#canvas').append('svg:svg')
        .attr('width', 800)
        .attr('height', 500);
      callback(svg);
    }

    var colorParties = function(svg, nodes) {
      let elements = svg.selectAll('circle')
        .data(nodes)
        .filter(function(d) { return (d.party === "Dem") })
        .style("fill", "blue");
    }

    var clusterElements = function() {
      let padding = 1.5, // separation between same-color nodes
        clusterPadding = 6, // separation between different-color nodes
        maxRadius = 12;
      var clusters = new Array();
    }
      // Use the pack layout to initialize node positions.
//       d3.layout.pack()
//         .sort(null)
//         .size([width, height])
//         .children(function(d) { return d.values; })
//         .value(function(d) { return d.radius * d.radius; })
//         .nodes({
//             values: d3.nest()
//             .key(function(d) { return d.cluster; })
//             .entries(nodes)
// });
//
//       var force = d3.layout.force()
//         .nodes(nodes)
//         .size([width, height])
//         .gravity(.02)
//         .charge(0)
//         .on("tick", tick)
//         .start();

    var createHouseMembers = function(svg, nodes, elementRadius) {
      let element = svg.selectAll('circle')
        .data(nodes)
        .enter().append('svg:circle')
        .attr('r', elementRadius)
        .attr('cx', function(d, i) {
          return d.x;
        })
        .attr('cy', function(d, i) {
          return d.y;
        });
    }

    var drawHouse = function(numnode, rad) {
      var numNodes = numnode || 100;
      var radius = rad || 250;
      var nodes = createHouseNodes(numNodes, radius);
      createSvg(radius, function(svg) {
        createHouseMembers(svg, nodes, 5);
      });
    }

    var drawClusters = function(numnode, rad) {
      var numNodes = numnode || 100;
      var radius = rad || 300;
      createSvg(radius, function(svg) {
        createHouseMembers(svg, numNodes, 5);
      });
    }

    $(document).ready(function() {
      drawHouse(houseRows, 300);
      // draw(40, 150);
    });
  }
}

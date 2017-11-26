import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Rep } from '../rep/rep';
import { ChartService } from '../services/chartservice';
import { RepService } from '../rep/rep.service';
import { DataService } from '../services/data.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-rep-chart',
  templateUrl: './rep-chart.component.html',
  styleUrls: ['./rep-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class RepChartComponent implements OnInit {
  reps;
  constructor(private _dataService: DataService) { }
  ngOnInit() {
    let svg;
    let reps;

    // the number of nodes in each row of the house map
    let houseRows = [60, 58, 53, 49, 45, 41, 37, 33, 30, 28];

    this._dataService.getMemberList('house').subscribe(data => {
      reps = data
    });

    // let houseArray = []
    // for(let i = 0; i < houseRows.length; i++) {
    //     let houseRow = [];
    //     let index = 0;
    //     for(let j = 0; j < houseRows[i]; j++) {
    //       houseRow.push(this.reps[index])
    //       index += j;
    //     }
    //     houseArray.push(houseRow);
    // }
    //
    // console.log(houseArray);

    // add data to house nodes
    // TODO wire this up with rep list data
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
        width = (localradius) + 50;
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

    // create the svg
    var createSvg = function(radius, callback) {
      d3.selectAll('svg').remove();
      svg = d3.select('#canvas').append('svg:svg')
        .attr('width', 650)
        .attr('height', 400);
      callback(svg);
    }

    // color nodes by party
    var colorParties = function(svg, nodes) {
      let dems = svg.selectAll('circle')
        .data(nodes)
        .filter(function(d) { return (d.party === "Dem") })
        .style("fill", "blue");
      let reps = svg.selectAll('circle')
        .data(nodes)
        .filter(function(d) { return (d.party === "Rep") })
        .style("fill", "red");
    }

    // draw house members on svg
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

    // draw the layout for house
    var drawHouse = function(numnode, rad) {
      var numNodes = numnode || 100;
      var radius = rad || 250;
      var nodes = createHouseNodes(numNodes, radius);
      createSvg(radius, function(svg) {
        createHouseMembers(svg, nodes, 5);
      });
    }

    // TODO draw the layout for clustering
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

import { Component, OnInit, 
        Input, ViewEncapsulation, 
        OnChanges, SimpleChange, 
        SimpleChanges } from '@angular/core';
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

export class RepChartComponent implements OnInit, OnChanges {
  svg;
  nodes;
  houseRows = [60, 58, 53, 49, 45, 41, 37, 33, 30, 28];

  @Input('dataAvailable')
  dataAvailable = false;
  // @Input('dataAvailable') set dataAvailable(value: boolean) {
  //  this._dataAvailable = value;

  //  if(this._dataAvailable == true){
  //    console.log("dataavailable: " + this._dataAvailable + " rep-chart reps: ");
  //    console.log(this.reps);
  //    this.nodes = this.drawHouse(this.houseRows, 300);
  //    // this.colorParties();
  //  }
  // }

  @Input() reps;

  ngOnInit() {
  }

   /* ENTRY POINT */
  ngOnChanges(changes: SimpleChanges) {
    console.log("those *simple* changes...");
    console.log(changes);
    // console.log('prev value: ', name.previousValue);
    // console.log('got name: ', name.currentValue);
    this.dataAvailable = changes.dataAvailable.currentValue
    this.reps = changes.reps.currentValue
    if(this.dataAvailable){
       console.log("draw it!");
       this.nodes = this.drawHouse(this.houseRows, 300);
      // this.colorParties();
     }
  }

  drawHouse (this, numnode, rad) {
    var _self = this;
    
    var numNodes = numnode || 100;
    var radius = rad || 250;
    var nodes = this.createHouseNodes(numNodes, radius);
    this.createSvg(radius, svg => {
      this.createHouseMembers(svg, nodes, 5);
    });
  }
  createHouseNodes (this, nodeBase, radius) {
      var nodes = [],
        angle,
        x,
        y,
        i,
        party,
        radius = radius,
        width,
        height,
        ind = 0;
      for (let j = 0; j < nodeBase.length; j++) {
        let localradius = (radius) - 15 * (j + 1);
        // console.log(localradius);
        width = (localradius) + 50;
        height = radius + 50;
        for (i = 0; i < nodeBase[j]; i++) {
          angle = (i / nodeBase[j]) * Math.PI; // Calculate the angle at which the element will be placed.
          // For a semicircle, we would use (i / numNodes) * Math.PI.
          x = -1 * (localradius * Math.cos(angle)) + (15 * j) + (width); // Calculate the x position of the element.
          y = -1 * (localradius * Math.sin(angle)) + (height); // Calculate the y position of the element.
          party = (i % 2 === 0) ? "Dem" : "Rep";

          nodes.push({'id': i, 
                      'x': x, 
                      'y': y, 
                      'party': this.reps[ind].party,
                      'color':  this.reps[ind].show ? 
                                this.reps[ind].party.toLowerCase() == "d" ? 
                                "blue" : "red" : "black"
             });

          ind++;
        }
      }
      return nodes;
    }

  createSvg(this, radius, callback) {
    d3.selectAll('svg').remove();
    this.svg = d3.select('#canvas').append('svg:svg')
      .attr('width', 650)
      .attr('height', 500);
    callback(this.svg);
  }

  createHouseMembers(this, svg, nodes, elementRadius) {
    let element = svg.selectAll('circle')
      .data(nodes)
      .enter().append('svg:circle')
      .attr('r', elementRadius)
      .attr('cx', function(d, i) {
        return d.x;
      })
      .attr('cy', function(d, i) {
        return d.y;
      })
      .attr('style', function(d, i) {
        // console.log("color " + d.color)
        return "fill:" + d.color;
      });
  }

  colorParties = function(this) {
    let elements = this.svg.selectAll('circle')
      .data(this.nodes)
      .map(node => {
        // console.log("node: ");
        // console.log(node);
      })
        // node.style("fill", node.color)})
      // .filter(function(d) { return (d.party === "Dem") })
      // .style("fill", "blue");
  }

  clusterElements = function() {
    let padding = 1.5, // separation between same-color nodes
      clusterPadding = 6, // separation between different-color nodes
      maxRadius = 12;
    var clusters = new Array();
  }

  drawClusters = function(numnode, rad) {
    var numNodes = numnode || 100;
    var radius = rad || 300;
    this.createSvg(radius, svg => {
      this.createHouseMembers(svg, numNodes, 5);
    });
  }

  constructor() { }

  
}


@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.r]="node.r">
      </svg:circle>
    </svg:g>
  `//,
  //styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}

    // $(document).ready(function() {
      
    //   // draw(40, 150);
    // });
    // ChartService.instantiate();
    // this._dataService.getMemberList('house').subscribe(data => {
    //   this.reps = data
    // });
    // [37, 33, 30, 28];
    // 33, 37, 41, 45, 49, 53, 58, 60




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

import { Component, Input, 
  ChangeDetectorRef, HostListener, 
  ChangeDetectionStrategy, OnInit, 
  AfterViewInit, OnChanges, 
  SimpleChange, 
        SimpleChanges  } from '@angular/core';
import { D3Service, ForceDirectedGraph, Node } from '../../d3';

@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" *ngFor="let node of nodes"
            [draggableNode]="node" [draggableInGraph]="graph"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('nodes') nodes;
  @Input('links') _links;
//   _allowDay: boolean;
  get links() {
      return this._links;
  }
  set links(value) {
      this._links = value;
      // this.graph.initSimulation(this._options) 
  }
  @Input('dataPromise') dataPromise;

  @Input('dataAvailable') dataAvailable = false;

  graph: ForceDirectedGraph;
  private _options: { width, height } = { width: 600, height: 800 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}
  
  ngOnChanges(changes: SimpleChanges) {
    
    // console.log("graph *simple* changes...");
    //   console.log(changes);
    //   // console.log('prev value: ', name.previousValue);
    //   // console.log('got name: ', name.currentValue);
    //   this.dataAvailable = changes.dataAvailable.currentValue
    //   // this.reps = changes.reps.currentValue
    //   if(changes.dataAvailable.currentValue == true 
    //       && changes.dataAvailable.previousValue == false){
    //     /** Receiving an initialized simulated graph from our custom d3 service */
    //     this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    //     /** Binding change detection check on each tick
    //      * This along with an onPush change detection strategy should enforce checking only when relevant!
    //      * This improves scripting computation duration in a couple of tests I've made, consistently.
    //      * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
    //      */
    //     this.graph.ticker.subscribe((d) => {
    //       this.ref.markForCheck();
    //     });

    //     // this.colorParties();
    //    }
  }

  ngOnInit() {
    this.dataPromise.subscribe(data => {
      console.log("oninit promise complete")
      /** Receiving an initialized simulated graph from our custom d3 service */
      this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this._links, this.options);

      /** Binding change detection check on each tick
       * This along with an onPush change detection strategy should enforce checking only when relevant!
       * This improves scripting computation duration in a couple of tests I've made, consistently.
       * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
       */
      this.graph.ticker.subscribe((d) => {
        this.ref.markForCheck();
      });

      // this.colorParties();
    })
     
  }

  ngAfterViewInit() {
    this.dataPromise.subscribe(data => {
      console.log("afterview promise complete")
      this.graph.initSimulation(this.options);
    })
  }

  get options() {
    return this._options /*= {
      width: window.innerWidth,
      height: window.innerHeight
    };*/
  }
}

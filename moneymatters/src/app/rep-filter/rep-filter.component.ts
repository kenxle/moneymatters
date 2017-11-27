import { Component, OnInit, Output, Input, ViewEncapsulation } from '@angular/core';
import { RepService } from '../rep/rep.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rep-filter',
  templateUrl: './rep-filter.component.html',
  styleUrls: ['./rep-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RepFilterComponent implements OnInit {
  // @Input('filterPromise') filterPromise; 
  @Input('bills_list') bills_list;
  @Output()
      filterChanged:EventEmitter<string> = new EventEmitter();

  constructor() {

  }

  callParent(filters) {
    console.log("call parent")
    // this.filterChanged.next('somePhone');
    this.filterChanged.next(filters);
  }

  filterOpened($event){
    console.log("filter opened: ");
    console.log($event);
  }
  filterClosed($event){
    console.log("filter closed: ");
    console.log($event);
  }

  applyFilter($event){
    console.log("apply filter: ");
    console.log($event);
  }

  applyPartyFilter($event){

    console.log("apply party filter: " + $event.value);
    console.log($event);
    this.callParent({party: $event.value})
  }

  cancelFilter($event){

  }

  collectFilters(){

  }

  setActive($event, filter) {
    // this.callParent();
    let classList: string[] = $event.target.className.split(/\s+/);
    if(classList.indexOf("active") === -1) {
      $event.target.classList.add("active");
    }
    else {
      $event.target.classList.remove("active");
    }

    console.log(RepService);
  }

  ngOnInit() {
  }

}

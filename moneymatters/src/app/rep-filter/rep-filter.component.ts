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
  selected = "Corey Jones Act";
  @Input('bills_list') bills_list;
  @Input('money_max') money_max;
  @Output() filterChanged:EventEmitter<string> = new EventEmitter();
  @Output() activeBill: EventEmitter<any> = new EventEmitter<any>();


  constructor() {

  }

  callParent(filters) {
    // this.filterChanged.next('somePhone');
    this.filterChanged.next(filters);
  }

  filterOpened($event){
  }
  filterClosed($event){
  }

  // could probably have a generic way to do this
  applyFilter($event){
  }

  applyPartyFilter($event){
    this.callParent({party: $event.value})
  }

  applyMoneyFilter($event){
    this.callParent({money: $event.value})
  }

  cancelFilter($event){

  }

  collectFilters(){

  }

  setActive($event/*, filter*/) {
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

import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { RepService } from '../rep/rep.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rep-filter',
  templateUrl: './rep-filter.component.html',
  styleUrls: ['./rep-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RepFilterComponent implements OnInit {
  @Output()
      filterChanged:EventEmitter<string> = new EventEmitter();

  constructor() {

  }

  callParent() {
    this.filterChanged.next('somePhone');
  }
  setActive($event, filter) {

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

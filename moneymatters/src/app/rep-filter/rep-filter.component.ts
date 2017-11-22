import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rep-filter',
  templateUrl: './rep-filter.component.html',
  styleUrls: ['./rep-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepFilterComponent implements OnInit {

  constructor() {

  }

  setActive($event) {
    let classList: string[] = $event.target.className.split(/\s+/);
    if(classList.indexOf("active") === -1) {
      $event.target.classList.add("active");
    }
    else {
      $event.target.classList.remove("active");
    }
  }

  ngOnInit() {
  }

}

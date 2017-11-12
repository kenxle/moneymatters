import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RepService } from '../rep/rep.service'

@Component({
  selector: 'app-rep-card',
  templateUrl: './rep-card.component.html',
  styleUrls: ['./rep-card.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RepCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

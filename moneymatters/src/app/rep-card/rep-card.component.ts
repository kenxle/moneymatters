import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RepService } from '../rep/rep.service';
// import { Rep } from '../rep/rep';

@Component({
  selector: 'app-rep-card',
  templateUrl: './rep-card.component.html',
  styleUrls: ['./rep-card.component.scss'],
  encapsulation: ViewEncapsulation.None
}) 

export class RepCardComponent implements OnInit {
  @Input() rep;
  constructor() {
   }

  ngOnInit() {
  }

}

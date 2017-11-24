import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Rep } from '../rep/rep';
import { REPS } from '../rep/mock-reps';
import { RepService } from '../rep/rep.service';


@Component({
  selector: 'app-rep-list',
  templateUrl: './rep-list.component.html',
  styleUrls: ['./rep-list.component.css'],
  providers: [RepService],
  encapsulation: ViewEncapsulation.None
})

export class RepListComponent {
  reps = REPS;
  constructor(private RepService: RepService) { }
  ngOnInit() {
  	// this.reps = RepService.getReps();
  }

}

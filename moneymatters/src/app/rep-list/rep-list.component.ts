import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Rep } from '../rep/rep';
// import { REPS } from '../rep/mock-reps';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-rep-list',
  templateUrl: './rep-list.component.html',
  styleUrls: ['./rep-list.component.scss'],
  providers: [DataService],
  encapsulation: ViewEncapsulation.None
})

export class RepListComponent {
  // reps = REPS;
  reps;

  constructor(private _dataService: DataService) { }
  ngOnInit() {
  	this._dataService.getMemberList('house').subscribe(data => {
	   	this.reps = data
	   	console.log(this.reps)

	});
  }

}

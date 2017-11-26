import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
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
  @Input() reps;

  constructor(private _dataService: DataService) { }
  ngOnInit() {
  	// this._dataService.getMemberList('house').subscribe(data => {
   //    // console.log("data" +data)
   //    // for(let rep of data){
   //    //   this.reps[rep.id] = new Rep(data)
   //   //  // }
	  //  	// this.reps = data.map(it => new Rep(...it))
   //    this.reps = data;
	  //  	console.log(this.reps)

	// });
  }

  applyFilters(this){

    this.reps = this.reps[0]; //test stub
  }

}

    
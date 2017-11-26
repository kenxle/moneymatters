import { Component } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	reps;
	dataAvailable = false;

	constructor(private _dataService: DataService) { 

	}
    ngOnInit() {
		this._dataService.getMemberList('house').subscribe(data => {
	      

	      this.reps = data;
	      this.reps.map((rep) => {rep.show = true;});
	    console.log("app reps");
		console.log(this.reps);
		this.dataAvailable = true;
// console.log("data" +JSON.stringify(data))
	      // console.log("app data")
	      // console.log(data)
	      // for(let rep of data){
	      //   this.reps[rep.id] = new Rep(data)
	     //  // }
		   	// this.reps = data.map(it => new Rep(...it))
		});
  	}

	applyFilters(this, filters){
		console.log("made it to the app");
		console.log(filters);
		let party = filters.party == 'democrat' ? 'd' : 'r';
		this.reps.map(rep => {rep.show = rep.party.toLowerCase() == party ? true : false;});
    	console.log(this.reps)
	}
}

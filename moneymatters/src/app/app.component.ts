import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Node, Link } from './d3';
import APP_CONFIG from './app.config';


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
	p;

	nodes: Node[] = [];
  	links: Link[] = [];

	constructor(private _dataService: DataService) {
		
		this.p = this._dataService.getMemberList('house');
		this.p.subscribe(data => {
		    this.reps = data;
		    this.reps.map((rep) => {rep.show = true;});
		    console.log("app reps");
			console.log(this.reps);
			this.dataAvailable = true;

			const N = this.reps.length,
		      getIndex = number => number - 1;

		/** constructing the nodes array */
		for (let i = 0; i < N; i++) {
		  let n = new Node(this.reps[i].first_name)
		  n.x = 0;
		  n.y = 0;
		  n.party = this.reps[i].party
		  n.active = this.reps[i].show
		  this.nodes.push(n);
		}
		
		let dems = this.nodes.filter(n => n.party.toLowerCase() == 'd')
		
		for (let i=0; i<dems.length-1; i++){
			let rand = Math.floor(Math.random() * dems.length)
			this.links.push(new Link(dems[i], dems[rand]));
			this.links.push(new Link(dems[i], dems[i+1]));
		}
		let repus = this.nodes.filter(n => n.party.toLowerCase() == 'r')
		for (let i=0; i<repus.length-1; i++){
			let rand = Math.floor(Math.random() * repus.length)
			this.links.push(new Link(repus[i], repus[rand]));
			this.links.push(new Link(repus[i], repus[i+1]));
		}
		// for (let i = 0; i < N; i++) {
		//   for (let m = i+1; m < N; m++) {
		//   	if(this.nodes[i].party == this.nodes[m].party){

		//     * connecting the nodes before starting the simulation 
		//     this.links.push(new Link(this.nodes[i], this.nodes[m]));
		//   	}
		    
		//   }
		// }
		console.log(this.links.length)
		
// console.log("data" +JSON.stringify(data))
	      // console.log("app data")
	      // console.log(data)
	      // for(let rep of data){
	      //   this.reps[rep.id] = new Rep(data)
	     //  // }
		   	// this.reps = data.map(it => new Rep(...it))
		});
		
	}

    ngOnInit() {
		
  	}

	applyFilters(this, filters){
		console.log("made it to the app");
		console.log(filters);
		let party = filters.party == 'democrat' ? 'd' : 'r';
		this.reps.map(rep => {rep.show = rep.party.toLowerCase() == party ? true : false;});
		this.nodes.map(node => {node.active = node.party.toLowerCase() == party ? true : false;})
    	console.log(this.reps)
	}
}

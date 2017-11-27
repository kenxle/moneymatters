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
	fp;
	bills;
	// signalChange = 0;

	nodes: Node[] = [];
  	links: Link[] = [];

	constructor(private _dataService: DataService) {


		this.fp = this._dataService.getBillList();
		this.fp.subscribe(data => {
		    this.bills = data;
		});

		this.p = this._dataService.getMemberList('house');
		this.p.subscribe(data => {
		    this.reps = data;
		    this.reps.map((rep) => {rep.show = true;});
		    console.log("app reps");
			console.log(this.reps);

			const N = this.reps.length,
		      getIndex = number => number - 1;

		let money_max = 0;
		/** constructing the nodes array */
		// let central_node = new Node("center");
		// central_node.party = 'c';
		// this.nodes.push(central_node);
		this.reps.map(rep =>{
		  // piggyback off this loop to collect the max of contributions
		  if (rep.total_contributions > money_max) money_max = rep.total_contributions;
		  let n = new Node(rep.first_name);
		  n.last_name = rep.last_name;
		  n.x = 0;
		  n.y = 0;
		  n.party = rep.party;
		  n.active = rep.show;
		  n.money = rep.total_contributions;
		  
		  this.nodes.push(n);
		});
		this.nodes.map(n =>{
		  n.money_max = money_max;
		});


		
		let dems = this.nodes.filter(n => n.party.toLowerCase() == 'd')
		
		for (let i=0; i<dems.length-1; i++){
			let rand = Math.floor(Math.random() * dems.length)
			this.links.push(new Link(dems[i], dems[rand]));
			this.links.push(new Link(dems[i], dems[i+1]));
			// this.links.push(new Link(dems[i], central_node));
		}
		let repus = this.nodes.filter(n => n.party.toLowerCase() == 'r')
		for (let i=0; i<repus.length-1; i++){
			let rand = Math.floor(Math.random() * repus.length)
			this.links.push(new Link(repus[i], repus[rand]));
			this.links.push(new Link(repus[i], repus[i+1]));
			// this.links.push(new Link(repus[i], central_node));
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

			this.dataAvailable = true;
			this.p.done = true;
		});
		
	}

    ngOnInit() {
		
  	}

	applyFilters(this, filters){ 
		console.log("applyfilters");
		console.log(filters);
		let party = filters.party == 'democrat' ? 'd' : 'r';
		this.reps.map(rep => {rep.show = rep.party.toLowerCase() == party ? true : false;});
	 	this.nodes.map(node => {
	 		node.active = node.party.toLowerCase() == party ? true : false;
	 	});

  		this.nodes = this.nodes.slice(); //sends update to ngOnChanges

  // 		this.links = [];
		// let dems = this.nodes.filter(n => n.party.toLowerCase() == 'd')
		
		// for (let i=0; i<dems.length-1; i++){
		// 	let rand = Math.floor(Math.random() * dems.length)
		// 	this.links.push(new Link(dems[i], dems[rand]));
		// 	this.links.push(new Link(dems[i], dems[i+1]));
		// 	// this.links.push(new Link(dems[i], central_node));
		// }
		// let repus = this.nodes.filter(n => n.party.toLowerCase() == 'r')
		// for (let i=0; i<repus.length-1; i++){
		// 	let rand = Math.floor(Math.random() * repus.length)
		// 	this.links.push(new Link(repus[i], repus[rand]));
		// 	this.links.push(new Link(repus[i], repus[i+1]));
		// 	// this.links.push(new Link(repus[i], central_node));
		// }

    	console.log(this.reps)
	}
}

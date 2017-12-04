import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Node, Link } from './d3';
import APP_CONFIG from './app.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	reps;
	origReps;
	origNodes;
	origLinks;
	dataAvailable = false;
	p;
	fp;
	bills;
	max_money_filter;
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
			this.origReps = data;
		    this.reps = data;
		    this.reps.map((rep) => {rep.show = true;});

			const N = this.reps.length,
		      getIndex = number => number - 1;

		let money_max = 0;
		let ri = 0;
		/** constructing the nodes array */
		// let central_node = new Node("center");
		// central_node.party = 'c';
		// this.nodes.push(central_node);
		this.reps.map(rep =>{
		  // piggyback off this loop to collect the max of contributions
		  if (rep.total_contributions > money_max) money_max = rep.total_contributions;
		  let n = new Node(rep.id);
		  // console.log(rep.id);
		  n.first_name = rep.first_name;
		  n.last_name = rep.last_name;
		  n.x = 0;
		  n.y = 0;
		  n.party = rep.party;
		  n.active = rep.show;
		  n.money = rep.total_contributions;

		  this.nodes.push(n);
		  ri++;
		});
		this.nodes.map(n =>{
		  n.money_max = money_max;
		});
		this.max_money_filter = money_max;
		this.origNodes = this.nodes;

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
		this.origLinks = this.links
		// for (let i = 0; i < N; i++) {
		//   for (let m = i+1; m < N; m++) {
		//   	if(this.nodes[i].party == this.nodes[m].party){

		//     * connecting the nodes before starting the simulation
		//     this.links.push(new Link(this.nodes[i], this.nodes[m]));
		//   	}

		//   }
		// }

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
		// the party filter
		if(filters.party){
			let party = filters.party == 'democrat' ? 'd' : 'r';
			this.reps.map(rep => {rep.show = rep.party.toLowerCase() == party ? true : false;});
		 	this.nodes.map(node => {
		 		node.active = node.party.toLowerCase() == party ? true : false;
		 	});

	  		this.nodes = this.nodes.slice(); //updates the graph. sends update to ngOnChanges

	  		// this.linkScramble();

    	}
    	if(filters.money || filters.money == 0){
    		//always filtering on origReps isn't the right way to do this, but it will let me check if this works
    		this.reps = this.origReps.filter(rep => rep.total_contributions > filters.money);
    		this.nodes = this.origNodes.filter(node => node.money > filters.money)
    		this.linkScramble();
    	}
	}

	linkScramble(this){
		// demo code that scrambles the links every time. used to check if the graph is working.
  		this.links = [];
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
	}
}

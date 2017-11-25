import { DataService } from '../services/data.service';

export class Rep {
 	constructor(data) {
	  	for(let key in data){
	  		this[key] = data.key
	  	}
    }
  id: string;
  name: string;
  party: string;
  district: string;
  // money: number;
  total_receipts: number;
  total_from_individuals: number;
  total_from_pacs: number;
  total_contributions: number;
  contributions: number;

  // addMoney(data){
  // }
}

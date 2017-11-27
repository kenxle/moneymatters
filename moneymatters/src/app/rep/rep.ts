import { DataService } from '../services/data.service';

export class Rep {
 	constructor({id
 				,name
 				,party
 				,district
 				,FECId
 				,CRPId
 				,total_receipts
 				,total_from_individuals
 				,total_from_pacs
 				,total_contributions}) {
 		// console.log("rep constructor with " + JSON.stringify(data))
    }
  id: string;
  name: string;
  party: string;
  district: string;
  FECId: string;
  CRPId: string;
  // money: number;
  total_receipts: number;
  total_from_individuals: number;
  total_from_pacs: number;
  total_contributions: number;
  show: boolean;

  // addMoney(data){
  // }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
  providers: [DataService],
  encapsulation: ViewEncapsulation.None
})
export class BillListComponent implements OnInit {
  bills;

  constructor(private _billListService: DataService) { }

    
  ngOnInit() {
   this._billListService.getBillList().subscribe(data => {
   	this.bills = data.bills
   	console.log(this.bills)
   	// console.log(data)
   });
  }

}

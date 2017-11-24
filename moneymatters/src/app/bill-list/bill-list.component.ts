import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BillListService } from './bill-list.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
  providers: [BillListService],
  encapsulation: ViewEncapsulation.None
})
export class BillListComponent implements OnInit {
  bills;

  constructor(private _billListService: BillListService) { }

    
  ngOnInit() {
   this._billListService.getBillList().subscribe(data => {
   	this.bills = data.bills
   	console.log(this.bills)
   	// console.log(data)
   });
  }

}

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
  bills: string[];

  constructor(private _billListService: BillListService) { }

    
  ngOnInit() {
   // this.bills = this._billListService.getBills().subscribe(data => {
   // 	console.log(data);
   // });
  }

}

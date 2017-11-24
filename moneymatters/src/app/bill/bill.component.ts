
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  @Input() bill;
  @Input() url: string;
  @Input() jurisdiction: string;
  @Input() session: number;
  @Input() prefix: string;
  @Input() number: string;
  @Input() measure: string;
  @Input() topic: string;
  @Input() has_organizations: number;


  constructor() { }

  ngOnInit() {
  	this.measure =  String(this.measure).replace(/<[^>]+>/gm, '') : '';
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RepService } from '../rep/rep.service'
import { Rep } from '../rep/rep';



@Component({
  selector: 'app-rep-list',
  templateUrl: './rep-list.component.html',
  styleUrls: ['./rep-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RepListComponent {
  constructor(private RepService: RepService) { }
  ngOnInit() {
    this.RepService.getReps()
  }

}

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { NgModule } from '@angular/core';
import * as d3 from 'd3';
import { RepService } from './rep/rep.service';
import { AppComponent } from './app.component';
import { RepListComponent } from './rep-list/rep-list.component';
import { RepCardComponent } from './rep-card/rep-card.component';
import { RepChartComponent } from './rep-chart/rep-chart.component';

import { BillListComponent } from './bill-list/bill-list.component'
import { BillListService } from './bill-list/bill-list.service'

import { RepFilterComponent } from './rep-filter/rep-filter.component';
import { FirstLetter } from './pipes/firstletter.pipe';
import { BillComponent } from './bill/bill.component';


@NgModule({
  declarations: [
    AppComponent,
    RepListComponent,
    RepCardComponent,
    RepChartComponent,
    BillListComponent,
    RepFilterComponent,
    FirstLetter,
    BillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [RepService]
})
export class AppModule { }

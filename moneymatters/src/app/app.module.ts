import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as d3 from 'd3';
import { RepService } from './rep/rep.service';
import { AppComponent } from './app.component';
import { RepListComponent } from './rep-list/rep-list.component';
import { RepCardComponent } from './rep-card/rep-card.component';
import { RepChartComponent } from './rep-chart/rep-chart.component';
import { RepFilterComponent } from './rep-filter/rep-filter.component';
import { FirstLetter } from './pipes/firstletter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RepListComponent,
    RepCardComponent,
    RepChartComponent,
    RepFilterComponent,
    FirstLetter
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [RepService]
})
export class AppModule { }

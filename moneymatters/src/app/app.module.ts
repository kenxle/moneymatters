import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { NgModule } from '@angular/core';
import * as d3 from 'd3';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service, D3_DIRECTIVES } from './d3';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import {NodeVisualComponent} from './visuals/shared/node-visual/node-visual.component'
import {LinkVisualComponent} from './visuals/shared/link-visual/link-visual.component'

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatMenuModule,
        MatSelectModule,
        MatSliderModule,
        MatPaginatorModule
        } from '@angular/material';
import {} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RepService } from './rep/rep.service';
import { AppComponent } from './app.component';
import { RepListComponent } from './rep-list/rep-list.component';
import { RepCardComponent } from './rep-card/rep-card.component';
import { RepChartComponent } from './rep-chart/rep-chart.component';

import { BillListComponent } from './bill-list/bill-list.component'
import { DataService } from './services/data.service'

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
    GraphComponent,
    ...SHARED_VISUALS,
    // NodeVisualComponent,
    // LinkVisualComponent,
    ...D3_DIRECTIVES,
    BillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2DropdownModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    HttpModule,
    MatPaginatorModule
  ],
  bootstrap: [AppComponent],
  providers: [DataService, D3Service]
})
export class AppModule { }

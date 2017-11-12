import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as d3 from 'd3';
import { RepService } from './rep/rep.service';
import { AppComponent } from './app.component';
import { RepListComponent } from './rep-list/rep-list.component';
import { RepCardComponent } from './rep-card/rep-card.component'



@NgModule({
  declarations: [
    AppComponent,
    RepListComponent,
    RepCardComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [RepService]
})
export class AppModule { }

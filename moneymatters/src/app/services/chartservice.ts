import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Rep } from '../rep/rep';
import { REPS } from '../rep/mock-reps';
import { RepService } from '../rep/rep.service';
import * as $ from 'jquery';

@Injectable()
export class ChartService {
  instantiate() {
  console.log('Chart Service Instantiated')
  }
}

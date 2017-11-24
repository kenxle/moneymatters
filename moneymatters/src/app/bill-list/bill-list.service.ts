import { Injectable } from '@angular/core';
import { BillListComponent } from './bill-list.component';
import {HttpClient} from '@angular/common/http';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BillListService {
  results: string[];
  
  constructor (
    private http: HttpClient
  ) {}

  getBills() {
  	let url = `/api/bills`
  	return this.http.get(url)
    .map((res:Response) => res.json());
  	// this.http.get(url).subscribe(data => {
   //    // Read the result field from the JSON response.
   //    this.results = data['results'];
   //  });
    //
  }

}

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
  	let url = `http://classic.maplight.org/services_open_api/map.bill_list_v1.json?apikey=568de22f84c58ba85a90fd2ae779b0ae&jurisdiction=us&session=115&include_organizations=0&has_organizations=0`
  	return this.http.get(url)
    .map((res:Response) => res.json());
  	// this.http.get(url).subscribe(data => {
   //    // Read the result field from the JSON response.
   //    this.results = data['results'];
   //  });
    //
  }

}

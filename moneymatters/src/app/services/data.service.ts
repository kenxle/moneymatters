import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'; //proper way to import the 'of' operator
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  // results: string[];
  
  constructor (
    private http: HttpClient
  ) {}

  getMemberList(chamber) {
    let url = `api/members/${chamber}`
    return this.http.get(url);
  }
  getBillList() {
  	let url = `api/bills`
  	return this.http.get(url);
  }

  billSearch(str) {
  	let url = `/bills/search/${str}`
  	return this.http.get(url);
  }

  getBillPosition(billId) {
  	let url = `/bill/${billId}/position`
  	return this.http.get(url);
  }

  organizationSearch(str) {
  	let url = `/organization/search/${str}`
  	return this.http.get(url);
  }

  getOrganizationPosition(orgId){
  	let url = `/organization/${orgId}/positions`
  	return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { Rep } from './rep';


@Injectable()
export class RepService {
  private reps: Rep[];// = REPS;
  private activeFilterList: {
    "bill": false;
    "money": false;
    "party": true;
  }

  public setActiveFilter(filter) {
    let toggleFilter = this.activeFilterList[filter]
    if(toggleFilter === false) {
      toggleFilter = true;
    }
    else {
      toggleFilter = false;
    }
  }
  public getRepFilters() {
    return this.activeFilterList;
  }
  getReps(): Rep[] {
    return this.reps;
  }
}

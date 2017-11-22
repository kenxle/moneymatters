import { Injectable } from '@angular/core';
import { Rep } from './rep';
import { REPS } from './mock-reps';

@Injectable()
export class RepService {
  private reps: Rep[] = REPS;

  getReps(): Rep[] {
    return this.reps;
  }
}

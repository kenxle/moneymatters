// ./src/browser.module.ts
import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/browser';

@NgModule({

  imports: [
    // Import this first
    UniversalModule,

  ]
})
export class MainModule {}
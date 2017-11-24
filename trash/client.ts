// ./src/client.ts
// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';

// Angular 2
import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal/browser';
import { bootloader } from '@angularclass/bootloader';

import { MainModule } from './browser.module';

export const platformRef = platformUniversalDynamic();

export function main() {
  return platformRef.bootstrapModule(MainModule);
}
// Bootstrap
bootloader(main);
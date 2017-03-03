import { enableProdMode }     from '@angular/core';
import { platformBrowser }    from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

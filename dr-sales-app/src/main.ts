import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify,{Auth} from 'aws-amplify';
import amplify from './aws-exports';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Amplify.configure(amplify);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

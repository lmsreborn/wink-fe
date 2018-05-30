import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import zh from '@angular/common/locales/zh';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {registerLocaleData} from '@angular/common';


if (environment.production) {
  enableProdMode();
}

// TODO: 位置是否正确
registerLocaleData(zh);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

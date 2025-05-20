import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { urlPrefixInterceptor } from './core/interceptors/url-prefix.interceptor';
import { environmentProvider } from './core/token/environment-token';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(
    withInterceptors([urlPrefixInterceptor])
  ),
    environmentProvider]
};

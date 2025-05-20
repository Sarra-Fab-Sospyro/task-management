import { HttpInterceptorFn } from '@angular/common/http';
import { ENVIRONMENT } from '../token/environment-token';
import { inject } from '@angular/core';

export const urlPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  const env = inject(ENVIRONMENT);

  const modifiedReq = req.clone({url: env.apiUrl + req.url});
  return next(modifiedReq);
};

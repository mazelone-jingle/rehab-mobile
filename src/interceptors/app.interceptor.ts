import { LanguageService } from './../services/language.service';
import { AlertService } from './../services/alert.service';
import { Observable } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { AuthService, GrantTypes } from 'src/services/auth.service';
import { LoggerService } from 'src/services/logger.service';

import {
    HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { LOG_OUT } from 'src/constants/language-key';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  httpHeader: any = { 'Content-Type': 'application/json' };

  constructor(
    private inj: Injector,
    private router: Router,
    private loggerSvc: LoggerService,
    private authSvc: AuthService,
    private alertSvc: AlertService,
    private languageSvc: LanguageService
    ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestUrl = req.url;
    // Admin 기능을 접근할 때에는 admin auth service를 이용.
    const authService = this.inj.get(AuthService); //authservice is an angular service

    // Get the auth header from the service.
    const authorization = 'Bearer ' + authService.token;

    let headers: any = {};
    //console.log('instanceOf FormData', req.body instanceof FormData);
    //console.log('ori.content.type', req.headers.get('Content-Type'));
    if (!(req.body instanceof FormData)) {
      headers = this.httpHeader;
      const reqContentType = req.headers.get('Content-Type');
      if (reqContentType != null) {
        headers['Content-Type'] = reqContentType;
      }
    }
    //console.log('headers', headers);
    if (authService.token != null) {
      headers.authorization = authorization;
    }

    // Clone the request to add the new header.
    const request = req.clone({ headers: new HttpHeaders(headers) });
    // console.log('authReq', req.headers);

    // Pass on the cloned request instead of the original request.
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 204) {
          return null;
        }
        return request;
      }),
      catchError((error, caught) => {
        this.loggerSvc.error({ error, caught });
        // Refresh token.
        if (error.status === 401) {
          if (authService.refreshToken != null) {
            const reqBody = req.body;
            // When refresh token failed.
            if (
              req.url.includes('api/Token') &&
              reqBody !== undefined &&
              reqBody.grantType === GrantTypes.refresh
            ) {
              this.languageSvc.getI18nLang(LOG_OUT).then(text => {
                this.alertSvc.presentAlert(text, false, () => this.handleAuthFail());
              });
            } else {
              return authService.extendToken().pipe(
                mergeMap((t: any) => {
                  const authReq = req.clone({
                    headers: req.headers.set(
                      'authorization',
                      'Bearer ' + authService.token
                    ),
                  });
                  return next.handle(authReq);
                })
              );
            }
          } else {
            // throw error;
            if (request.url.endsWith('/api/Token')) {
              let message = error.error.message;

              if (message.title !== undefined) {
                message = message.title;
              }
              this.alertSvc.presentAlert(message, false, null);
            } else {
              this.handleAuthFail();
            }
          }
        } else if (error.status === 404 || error.status === 500) {
          // TODO: report....
          this.loggerSvc.log('err', error, error.error);
          //return next.handle(authReq);
          throw error;
        } else if (
          error.status === 400 &&
          error.error === 'Could not verify auth request'
        ) {
          authService.logOut();
          this.router.navigate(['/']);
        }
        //return all others errors
        throw error;
      })
    );
  }

  handleAuthFail() {
    this.authSvc.logOut();
  }
}

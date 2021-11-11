import { LanguageService } from './../services/language.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/services/loading.service';
import { LANG_EN, LANG_KO } from 'src/constants/common';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    public loaderService: LoadingService,
    private languageSvc: LanguageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let textPleaseWait = '';
    if (this.languageSvc.getCurrentLang()) {
      switch(this.languageSvc.getCurrentLang()) {
        case LANG_KO: {
          textPleaseWait = '잠시만 기다려 주세요...';
          break;
        }
        case LANG_EN: {
          textPleaseWait = 'Please wait...';
          break;
        }
      }
    }
    return from(this.loaderService.create(textPleaseWait))
      .pipe(
        tap((loading) => loading.present()),
        switchMap((loading) => next.handle(req).pipe(
            finalize(() => {
              loading.dismiss();
            })
          ))
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/services/loading.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.loaderService.create())
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

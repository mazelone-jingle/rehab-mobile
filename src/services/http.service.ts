
import { Observable, of, throwError } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { LoggerService } from './logger.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  protected baseUrl: string;

  protected get authHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authSvc.token);
    return headers;
  }
  protected get headers(): HttpHeaders {
    let headers = this.authHeader;
    headers = headers.append('Content-type', 'application/json');

    return headers;
  }
  protected get multipartHeaders(): HttpHeaders {
    let headers = this.authHeader;
    //headers = headers.append('Content-type', 'multipart/form-data');
    return headers;
  }

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    protected route: ActivatedRoute,
    protected router: Router,
    protected logger: LoggerService,
    protected authSvc: AuthService) {

    this.baseUrl = baseUrl;
  }

  getAll<T>(): Observable<T> {
    this.logger.log('headers', this.headers);

    return this.http.get(this.baseUrl)
      .pipe(
        tap((data) => { this.logger.log('getAll.data', JSON.stringify(data)); }),
        catchError((err: HttpErrorResponse) => { return this.handleError(err); })
      );
  }

  get<T>(idx: any): Observable<T> {
    return this.http.get([this.baseUrl, idx].join('/'))
      .pipe(
        tap((data) => { this.logger.log('get.data', JSON.stringify(data)); }),
        catchError((err: HttpErrorResponse) => { return this.handleError(err); })
      );
  }

  create(item: any) {
    return this.http.post(this.baseUrl, JSON.stringify(item))
      .pipe(
        tap(data => { this.logger.log('post.data', JSON.stringify(data)); }),
        catchError(err => this.handleError(err))
      );
  }

  update(idx: any, item: any) {
    return this.http.put([this.baseUrl, idx].join('/'), item)
      .pipe(
        tap(data => this.logger.log("put data: " + JSON.stringify(data))),
        catchError(err => this.handleError(err))
      );
  }

  delete(idx: any) {
    return this.http.delete([this.baseUrl, idx].join('/'))
      .pipe(
        tap(data => this.logger.log('delete.data', JSON.stringify(data))),
        catchError(err => this.handleError(err))
      );
  }


  requestPostUrlEncode(url: string, params: any) {
    let urlencodeheaders = this.authHeader;
    urlencodeheaders = urlencodeheaders.append('Content-Type', 'application/x-www-form-urlencoded');
    let query = (params == null) ? null : Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return this.http.post(this.baseUrl + url, query, { headers: urlencodeheaders })
      .pipe(
        tap(data => { this.logger.log('post.data', JSON.stringify(data)); }),
        catchError(err => this.handleError(err))
      );
  }

  //protected handleError(err: HttpErrorResponse): Observable<any> | ErrorObservable {
  protected handleError(err: HttpErrorResponse): Observable<any> {
    // not authorized
    this.logger.log('handleError', err);
    if (err.status === 401) {
      this.authSvc.logOut();
      this.router.navigate(['/login']);
      return of();
    }

    return throwError(err);
  }
}

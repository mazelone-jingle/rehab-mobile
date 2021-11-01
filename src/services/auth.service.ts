import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpService } from './http.service';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  expire: Date;
  protected get stored(): any {
    const value = localStorage.getItem(this._userKey);
    return value != null ? JSON.parse(value) : '';
  }

  private _token: string | null;
  public get token(): any {
    if (this.stored) {
      return this.stored.token;
    } else {
      return null;
    }
  }

  private _expires_in: number | null;
  public get expires_in(): any {
    if (this.stored) {
      return this.stored.expires_in;
    } else {
      return null;
    }
  }

  private _refreshToken: string | null;
  public get refreshToken(): any {
    if (this.stored) {
      return this.stored.refreshToken;
    } else {
      return null;
    }
  }

  public get username(): string {
    return this.stored !== null ? this.stored.username : '';
  }

  private _userKey = 'currentUser';
  private baseUrl: string;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.baseUrl = environment.apiDomain + 'api/Token';
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-type', 'application/json');

    const user = localStorage.getItem(this._userKey);
    if (user) {
      const currentUser = JSON.parse(user);
      this._token = currentUser && currentUser.token;
    }
  }

  login(userInfo: ITokenRequest): Observable<any> {
    const request = {
      email: userInfo.email,
      password: userInfo.password,
      grantType: GrantTypes.password,
      refreshToken: '',
    } as ITokenRequest;
    return this.callTokenApi(request);
  }

  extendToken(): Observable<boolean | any> {
    const request = {
      email: this.username,
      password: '',
      refreshToken: this.refreshToken,
      grantType: GrantTypes.refresh,
    } as ITokenRequest;
    return this.callTokenApi(request);
  }

  private callTokenApi(data: ITokenRequest /*, rememberMe: boolean*/) {
    return this.http
      .post(`${this.baseUrl}/Patient`, data, { headers: this.headers })
      .pipe(
        tap((response) => {
          const token: Token | null = response as Token;

          // parse payload
          const payloads = token.token.substring(
            token.token.indexOf('.') + 1,
            token.token.lastIndexOf('.')
          );
          const decoded = atob(payloads);
          const parsed = JSON.parse(decoded);

          if (token) {
            this._token = token.token;
            this._expires_in = token.expires_in;
            this._refreshToken = token.refresh_token;
            const now = new Date();
            now.setSeconds(now.getSeconds() + token.expires_in);
            this.expire = now;

            const serializeObj: any = {
              username: data.email,
              domain: parsed.domain,
              token: this._token,
              expires_in: this._expires_in,
              refreshToken: this._refreshToken,
            };

            localStorage.setItem(this._userKey, JSON.stringify(serializeObj));
          }
          return !!token;
        }),
        catchError((err) => throwError(err))
      );
  }

  logOut(): void {
    this._token = null;
    localStorage.removeItem(this._userKey);
  }
}

export const GrantTypes = {
  password: 'password',
  refresh: 'refresh',
};

interface Token {
  token: string;
  expires_in: number;
  refresh_token: string;
}

export interface ITokenRequest {
  email: string;
  password: string;
  grantType: string;
  refreshToken: string;
}

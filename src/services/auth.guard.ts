import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
// import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionTypes, ILoginState, loginStateSelector } from 'src/reducer/login-state.reducer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router,
    public authSvc: AuthService,
    // private store: Store<ILoginState>
  ) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.store.pipe(
    //   select(loginStateSelector),
    //   map(isLogin => {
    //     if (isLogin) {
    //       return true;
    //     }
    //     this.store.dispatch({type: ActionTypes.logout });
    //     this.router.navigate(['/login']);
    //     return false;
    //   })
    // );
    if (localStorage.getItem('currentUser')) {
      return true;
    }


    this.router.navigate(['/login']);
    return false;
  }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    else {
      // not logged in so redirect to home page
      this.router.navigateByUrl('/welcome', { queryParams: {path:'' }});
      return false;
    }
  }
}
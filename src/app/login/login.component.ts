import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { HeaderComponent } from '../shared/components/header/header.component';

import { Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    @Inject('apiBase') private _apiBase: string) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          HeaderComponent.isUserLoggedIn = true;
          HeaderComponent.updateUserStatus.next(true);
          this.router.navigateByUrl('/');
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
      });
  }
  openhWindowAuth(provider: string){

    var newWindow = window.open(`${this._apiBase}/authorize/${provider}`, 'name', 'height=585, width=770');
     if (window.focus) {
       newWindow.focus();
     }
  }
}

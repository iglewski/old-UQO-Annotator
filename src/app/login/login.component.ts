import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  //styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
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
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.alertService.error(error._body);
            this.loading = false;
        });
    /*
    var model = this.model;
    var res: Observable<boolean>;
    res = this.authenticationService.login(model.username, model.password);
    if (res) {
      //AuthenticationService.SetCredentials(model.username, model.password);
      //$location.path('/');
    } else {
      //FlashService.Error('not connected');
      //dataLoading = false;
    }
    */
  }
}
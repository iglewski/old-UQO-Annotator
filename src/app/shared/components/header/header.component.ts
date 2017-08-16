import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';

import { AlertService, AuthenticationService } from '../../../_services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isCollapsed = true;
  username;
  public static isUserLoggedIn:boolean = false;
  public static updateUserStatus: Subject<boolean> = new Subject();

  constructor(private _authService: AuthenticationService, private translate: TranslateService) {
    HeaderComponent.updateUserStatus.subscribe(res => {
      var cU = localStorage.getItem('currentUser');
      this.username = cU == null ? '' : JSON.parse(cU).username;
    })
  }

  ngOnInit() {
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  logout() {
    this._authService.logout().subscribe(
      data => {
        HeaderComponent.isUserLoggedIn = false;
      });
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  isUser(){
    return HeaderComponent.isUserLoggedIn;
  }
}

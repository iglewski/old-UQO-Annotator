import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();
  }

  login() {
  }
}
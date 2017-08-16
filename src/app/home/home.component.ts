import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/index';
import { HeaderComponent } from '../shared/components/header/header.component';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
    templateUrl: 'home.component.html',
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  files: File[]=[];

  constructor(private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
        this.loadAllfiles();
  }

  deleteUser(_id: string) {
        this.userService.delete(_id);
  }

  private loadAllfiles() {
    this.userService.getAll().subscribe(files => { this.files = files; });
  }

  logout(){
    this.authenticationService.logout();
  }

}
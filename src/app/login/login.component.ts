import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        ) { }

    ngOnInit() {
        // reset login status
         
    }

     
}

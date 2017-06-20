import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

import { AuthenticationService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService,
        private config: AppConfig) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }
 
    getAll() {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }
 
    getById(username: string) {
        return this.http.get(this.config.apiUrl + '/users/' + username, this.jwt()).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
    }
 
    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user.username, user, this.jwt());
    }
 
    delete(username: string) {
        return this.http.delete(this.config.apiUrl + '/users/' + username, this.jwt());
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}

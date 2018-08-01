import { Injectable } from '@angular/core';
import {User} from '../models/user.model.client';
import { map } from 'rxjs/operators';
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { SharedService } from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router, private requestOptions: RequestOptions) { }

// users: User[] = [
// {_id: "123", username: "new", password: "new", firstName: "New", lastName: "Person", dob: 1/1/1970, gender: Female, country: USA, state: Chicago, city: Illinois, phone: 123-555-0123, email: "new@gmail.com"},
// {_id: "123", username: "tom", password: "tom", firstName: "Tom", lastName: "Guy", dob: 1/1/1980, gender: Male, country: USA, state: New York, city: New York, phone: 123-555-4567, email: "tom@gmail.com"},
// {_id: "123", username: "jane", password: "jane", firstName: "Jane", lastName: "Smith", dob: 1/1/1990, gender: Female, country: USA, state: Orlando, city: Florida, phone: 123-555-8910, email: "jane@gmail.com"},
// ];


createUser(user: User) {
  const url = this.baseUrl + '/api/user';
  return this.http.post(url, user).pipe(map(
    (response: Response) => {
      return response.json();
    }
  ))
}

register(username: String, password: String) {
 // this communication will be secured
 this.options.withCredentials = true;
 const user = {
   username : username,
   password : password
 };
 return this.http.post(this.baseUrl + '/api/register', user, this.options).pipe(map(
   (res: Response) => {
     const data = res.json();
     return data;
   }
 ));
}

login(username: String, password: String) {
  this.options.withCredentials = true; // jga
  const body = {
    username : username,
    password : password
  };
  return this.http.post(this.baseUrl + '/api/login', body, this.options).pipe(map(
     (res: Response) => {
       return res.json();
     }
   ));
}

loggedIn() {
 this.options.withCredentials = true;
 return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(map(
   (res: Response) => {
     const user = res.json();
     if (user !== 0) {
       this.sharedService.user = user; // setting user so as to share with all components
       return true;
       } else {
         this.router.navigate(['/login']);
         return false;
       }
     }
   ));
}

logout() {
 this.options.withCredentials = true;
 return this.http.post(this.baseUrl + '/api/logout', '', this.options).pipe(map(
     (res: Response) => {
       this.sharedService.user = null;
       return res;
     }
   ));
}
  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
  }


  findUserByUsername(username: string) {
  const url = this.baseUrl + '/api/user?username=' + username;
  return this.http.get(url).pipe(map(
    (response: Response) => {
      return response.json();
    }
   ))
  }


  findUserByCredentials(username: string, password: string) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url).pipe(map(
        (response:Response) => {
          return response.json();
        }
    ))
  }


  updateUser(userId: string, user: User) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
  }


  deleteUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
  }
}

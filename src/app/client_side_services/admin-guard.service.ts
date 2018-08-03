import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';
// import {AdminService} from './admin.service.client';
// private adminService:AdminService,

@Injectable()

export class AdminGuard implements CanActivate {

 constructor(private userService: UserService, private router: Router) {}

 canActivate() {
   return this.userService.adminLoggedIn();
 }

}
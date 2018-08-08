import { Component, OnInit } from '@angular/core';
import { UserService } from "../../client_side_services/user.service.client"
import { Router } from '@angular/router';
import { SharedService } from "../../client_side_services/shared.service.client"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  loggedIn: boolean;
  isAdmin: boolean;

  ngOnInit() {
  	this.isLoggedIn();
    if (this.sharedService.user) {
      this.isAdmin = this.sharedService.user.isAdmin;
    } else {
      this.isAdmin = false;
    }
  }

  isLoggedIn() {
  	this.userService.publicLoggedIn().subscribe(
  		(isLoggedIn) => {
  			this.loggedIn = isLoggedIn;
  		}	
  	);
  }

  logout() {
		this.userService.logout().subscribe(
			(status) => {
				this.router.navigate(['/']);
			}
		);
	}
}

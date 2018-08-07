import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../../client_side_services/user.service.client'
import { User } from '../../../models/user.model.client'
import { SharedService } from '../../../client_side_services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {

  }

	logout() {
	this.userService.logout().subscribe(
     (data: any) => this.router.navigate(['/login'])
   );

}

}
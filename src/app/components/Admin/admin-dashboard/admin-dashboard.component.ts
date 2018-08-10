import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../../client_side_services/user.service.client'
import { User } from '../../../models/user.model.client'
import { SharedService } from '../../../client_side_services/shared.service.client';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private sharedService: SharedService, private router: Router) { }

  uid: string;
  ngOnInit() {
    this.uid = this.sharedService.user._id;
  }

	logout() {
	this.userService.logout().subscribe(
     (data: any) => this.router.navigate(['/login'])
    );
  }
}
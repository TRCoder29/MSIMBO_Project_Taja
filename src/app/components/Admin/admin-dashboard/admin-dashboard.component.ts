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



  constructor() { }

  ngOnInit() {

	}

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../client_side_services/user.service.client'
import { User } from '../../../models/user.model.client'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})

export class AdminClientsComponent implements OnInit {

uid: string;
users: User[];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.userService.findUsers().subscribe(
        (users: User[]) => {
          this.users = users;
          console.log(this.users);
          // console.log(this.users);
        }
      );
    });
  }

}

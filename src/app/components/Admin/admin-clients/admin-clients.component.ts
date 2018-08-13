import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../client_side_services/user.service.client';
import { User } from '../../../models/user.model.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})

export class AdminClientsComponent implements OnInit {

 @ViewChild('f') adminClientsForm: NgForm;

uid: string;
users: User[];
search: string = "";

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.search = "";
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.userService.findUsers().subscribe(
        (users: User[]) => {
          this.users = users; // console.log(this.users);
        }
      );
    });
  }

  delete(id: string){
    // console.log(id);
    this.userService.deleteUser(id).subscribe(
      (data: any) => {
         this.userService.findUsers().subscribe(
            (users: User[]) => {
              this.users = users; // console.log(this.users);
            }
        );
    });
  }
}



// Need to make changes to delete function so that when the x is pushed, an alert option box pops up to ask if you're sure you want to delete that user.
// If no, then nothing happens, and admin is returned to the admin-clients page. If yes, then another box pops up for admin password. If successful,
// then account is deleted.
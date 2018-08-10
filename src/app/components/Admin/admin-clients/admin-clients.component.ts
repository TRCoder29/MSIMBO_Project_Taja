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
search: string = "";

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

//   delete(){
//     console.log("delete");
//     this.userService.deleteUser(this.uid).subscribe(
//       (users: User[]) => {
//         if (this.sharedService.user.isAdmin) {
//       this.router.navigate(['admin-clients'])
//       } else {
//       this.userService.logout().subscribe(
//         (res: any) => {
//           this.router.navigate(['home']);
//         }
//         )
//       }
//     });
//   }
// }

// Need to make changes to delete function so that when the x is pushed, an alert option box pops up to ask if you're sure you want to delete that user.
// If no, then nothing happens, and admin is returned to the admin-clients page. If yes, then another box pops up for admin password. If successful,
// then account is deleted.
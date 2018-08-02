import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../client_side_services/user.service.client';
import { User } from '../../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../client_side_services/shared.service.client';

@Component({
  selector: 'app-admin-clients-new',
  templateUrl: './admin-clients-new.component.html',
  styleUrls: ['./admin-clients-new.component.css']
})
export class AdminClientsNewComponent implements OnInit {

@ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  verifyPassword: string;
  passwordError: boolean;
  usernameError: boolean;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  email: string;
  prefPhone: boolean;
  prefEmail: boolean;
  idNum: string;
  idType: string;
  idDate: string;
  idCountry: string;
  idState: string;
  redress: string;
  knownTravelNum: string;
  
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.passwordError = false;
    this.usernameError = false;
  }

  register() {
    this.ngOnInit();
  	this.username = this.registerForm.value.username;
  	this.password = this.registerForm.value.password;
  	this.verifyPassword = this.registerForm.value.verifyPassword;
  	this.firstName = this.registerForm.value.firstName;
  	this.lastName = this.registerForm.value.lastName;
  	this.dob = this.registerForm.value.dob;
  	this.gender = this.registerForm.value.gender;
  	this.country = this.registerForm.value.country;
  	this.state = this.registerForm.value.state;
  	this.city = this.registerForm.value.city;
  	this.phone = this.registerForm.value.phone;
  	this.email = this.registerForm.value.email;

    if(this.password !== this.verifyPassword) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      this.userService.findUserByUsername(this.username).subscribe(
        (data: any) => {
          if(!data) {
          this.userService.register(this.username, this.password).subscribe(
            (data: User) => {
              this.sharedService.user = data;
              this.router.navigate(['user']);
            },
            (error: any) => {
              this.usernameError = false;
            }
          );
          } else {
            this.usernameError = true;
          }
        }
      )
    }
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../client_side_services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../client_side_services/shared.service.client';
declare var $: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  prefContact: boolean;
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
    $("input[required]").parent().children("label").addClass("required")
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
    this.prefContact =  this.registerForm.value.prefContact;
    this.idNum =  this.registerForm.value.idNum;
    this.idType =  this.registerForm.value.idType;
    this.idDate =  this.registerForm.value.idDate;
    this.idCountry =  this.registerForm.value.idCountry;
    this.idState =  this.registerForm.value.idState;
    this.redress =  this.registerForm.value.redress;
    this.knownTravelNum =  this.registerForm.value.knownTravelNum;
    if(this.password !== this.verifyPassword) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      this.userService.findUserByUsername(this.username).subscribe(
        (data: any) => {
          if(!data) {
            const newUser: User = {
              username: this.username,
              password: this.password,
              firstName: this.firstName,
              lastName: this.lastName,
              dob: this.dob,
              gender: this.gender,
              country: this.country,
              state: this.state,
              city: this.city,
              phone: this.phone,
              email: this.email,
              prefContact:  this.prefContact,
              idNum:  this.idNum,
              idType:  this.idType,
              idDate:  this.idDate,
              idCountry:  this.idCountry,
              idState:  this.idState,
              redress:  this.redress,
              knownTravelNum:  this.knownTravelNum,
            }
          this.userService.register(newUser).subscribe(
            (data: User) => {
              this.sharedService.user = data;
              this.router.navigate(['/user']);
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

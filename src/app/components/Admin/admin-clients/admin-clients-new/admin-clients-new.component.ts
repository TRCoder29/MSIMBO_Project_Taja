import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../client_side_services/user.service.client';
import { User } from '../../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../client_side_services/shared.service.client';
declare var $: any;

@Component({
  selector: 'app-admin-clients-new',
  templateUrl: './admin-clients-new.component.html',
  styleUrls: ['./admin-clients-new.component.css']
})
export class AdminClientsNewComponent implements OnInit {

@ViewChild('f') adminClientsNewForm: NgForm;

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

  create() {
    this.ngOnInit();
    this.username = this.adminClientsNewForm.value.username;
    this.password = this.adminClientsNewForm.value.password;
    this.verifyPassword = this.adminClientsNewForm.value.verifyPassword;
    this.firstName = this.adminClientsNewForm.value.firstName;
    this.lastName = this.adminClientsNewForm.value.lastName;
    this.dob = this.adminClientsNewForm.value.dob;
    this.gender = this.adminClientsNewForm.value.gender;
    this.country = this.adminClientsNewForm.value.country;
    this.state = this.adminClientsNewForm.value.state;
    this.city = this.adminClientsNewForm.value.city;
    this.phone = this.adminClientsNewForm.value.phone;
    this.email = this.adminClientsNewForm.value.email;
    this.prefContact = this.adminClientsNewForm.value.prefContact;
    this.idNum =  this.adminClientsNewForm.value.idNum;
    this.idType =  this.adminClientsNewForm.value.idType;
    this.idDate =  this.adminClientsNewForm.value.idDate;
    this.idCountry =  this.adminClientsNewForm.value.idCountry;
    this.idState =  this.adminClientsNewForm.value.idState;
    this.redress =  this.adminClientsNewForm.value.redress;
    this.knownTravelNum =  this.adminClientsNewForm.value.knownTravelNum;
    // Verify Password Alert
    if(this.password !== this.adminClientsNewForm.value.verifyPassword) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      this.userService.findUserByUsername(this.username).subscribe(
        (data: any) => {
          if(!data) {
            const newUser: User= {
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
          this.userService.createUser(newUser).subscribe(
            (data: User) => {
              this.router.navigate(['/admin-clients']);
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
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../../../client_side_services/user.service.client'
import { User } from '../../../../models/user.model.client'
import { SharedService } from '../../../../client_side_services/shared.service.client'
declare var $: any;

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

	@ViewChild('f') accountInfoForm: NgForm;

	uid: string;
	username: string;
	password: string;
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
	idNum?: string;
	idType?: string;
	idDate?: string;
	idCountry?: string;
	idState?: string;
	redress?: string;
	knownTravelNum?: string;
	oldUsername: string;
	usernameTaken: boolean;
	submitSuccess: boolean;
	passwordError: boolean;
	// verifyPassword: string;
	usernameError: boolean;
	isAdmin: boolean;
	user: User = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		dob: '',
		gender: '',
		country: '',
		state: '',
		city: '',
		phone: '',
		email: '',
		prefContact: false,
		idNum: '',
		idType: '',
		idDate: '',
		idCountry: '',
		idState: '',
		redress: '',
		knownTravelNum: ''
	};
	aUser: User;
	users: User [];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
	  $("input[required]").parent().children("label").addClass("required")
	  this.passwordError = false;
	  this.usernameError = false;
	  this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.userService.findUserByUsername(this.username).subscribe(
        (users: User[]) => {
          this.users = users;
        }
       );
  		// if(this.password !== this.verifyPassword) {
	   //    this.passwordError = true;
	   //  } else {
	   //    this.passwordError = false;
	  	// }
  		this.userService.findUserById(this.uid).subscribe(
        (user: User) => {
          this.user = user;
          	this.username = this.user.username;
			this.firstName = this.user.firstName;
			this.lastName = this.user.lastName;
			this.dob = this.user.dob;
			this.gender = this.user.gender;
			this.country = this.user.country;
			this.state = this.user.state;
			this.city = this.user.city;
			this.phone = this.user.phone;
			this.email = this.user.email;
			this.prefContact =  this.user.prefContact;
			this.idNum =  this.idNum;
			this.idType =  this.idType;
			this.idDate =  this.idDate;
			this.idCountry =  this.idCountry;
			this.idState =  this.idState;
			this.redress =  this.redress;
			this.knownTravelNum =  this.knownTravelNum;
			this.oldUsername = this.user.username;
        }
      );
    })
  }

	update(){
		this.username = this.accountInfoForm.value.username;
		this.password = this.accountInfoForm.value.password;
		this.firstName = this.accountInfoForm.value.firstName;
		this.lastName = this.accountInfoForm.value.lastName;
		this.dob = this.accountInfoForm.value.dob;
		this.gender = this.accountInfoForm.value.gender;
		this.country = this.accountInfoForm.value.country;
		this.state = this.accountInfoForm.value.state;
		this.city = this.accountInfoForm.value.city;
		this.phone = this.accountInfoForm.value.phone;
		this.email = this.accountInfoForm.value.email;
		this.prefContact = this.accountInfoForm.value.prefContact;
		this.idNum = this.accountInfoForm.value.idNum;
		this.idType = this.accountInfoForm.value.idType;
		this.idDate = this.accountInfoForm.value.idDate;
		this.idCountry = this.accountInfoForm.value.idCountry;
		this.idState = this.accountInfoForm.value.idState;
		this.redress = this.accountInfoForm.value.redress;
		this.knownTravelNum = this.accountInfoForm.value.knownTravelNum;
		this.oldUsername = this.user.username;
		this.userService.findUserByUsername(this.username).subscribe(
			(user: User) => {
				this.aUser = user;
				if(this.aUser && this.oldUsername != this.username){
					this.usernameTaken = true;
					this.submitSuccess = false;
				} else {
					const updatedUser: User = {
						_id: this.user._id,
						username: this.username,
						password: this.user.password,
						firstName: this.firstName,
						lastName: this.lastName,
						dob: this.dob,
						gender: this.gender,
						country: this.country,
						state: this.state,
						city: this.city,
						phone: this.phone,
						email: this.email,
						prefContact: this.prefContact,
						idNum: this.idNum,
						idType: this.idType,
						idDate: this.idDate,
						idCountry: this.idCountry,
						idState: this.idState,
						redress: this.redress,
						knownTravelNum: this.knownTravelNum
					};
					console.log(updatedUser);
					this.userService.updateUser(this.user._id, updatedUser).subscribe(
						(res: any) => {
							if (this.sharedService.user.isAdmin) {
							this.usernameTaken = false;
							this.submitSuccess = true;
							this.router.navigate(['/admin'])
							} else {
					         this.router.navigate(['/user']);
							}
						}
					);
				}
			}
		);
	}

	delete(){
    this.userService.deleteUser(this.uid).subscribe(
      (users: User[]) => {
      	if (this.sharedService.user.isAdmin) {
			this.router.navigate(['/admin-clients'])
			} else {
			this.userService.logout().subscribe(
				(res: any) => {
					this.router.navigate(['/home']);
				}
				)
	    	}
	    });
	}
}

	  // this.usernameTaken = false;
	  // this.submitSuccess = false;
	  // this.passwordError = false;
	  // this.verifyPassword = false;
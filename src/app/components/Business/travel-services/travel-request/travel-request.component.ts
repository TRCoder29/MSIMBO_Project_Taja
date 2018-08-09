import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TravelService } from '../../../../client_side_services/travel.service.client'
import { Travel } from '../../../../models/travel.model.client'
import { Router } from '@angular/router'
import { SharedService } from '../../../../client_side_services/shared.service.client';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {

  @ViewChild('f') travelRequestForm: NgForm;

  uid: string;
  tid: string;
  trips: Travel[];
  username: string;
  password: string;
  passwordError: boolean;
  usernameError: boolean;
  firstName: string;
  lastName: string;
  departureCity: string;
  destination: string;
  numGuest: string;
  numAdult: string;
  numChild: string;
  childAge: string; // How should this be formatted?
  departDate: string; // How should this be formatted?
  returnDate: string; // How should this be formatted?
  flexible: boolean; // Two Choices
  departTime: boolean; // Many Choices (See Below)
  returnTime: boolean; // Many Choices (See Below)
  travelMethod: boolean; // Many Choices (See Below)
  hotel: boolean;  // Choose or Not
  hotelRooms: string;
  hotelGuestNum: string;
  roomType: boolean; // Many Choices (See Below)
  homeShare: boolean; // Choose or Not
  homeRooms: string;
  homeGuests: string;
  allInclusive: boolean; // Choose or Not
  allIncRooms: string;
  allIncGuests: string;
  allIncType: boolean; // Many Choices (See Below)
  cruise: boolean; // Choose or Not
  cruiseCabins: string;
  cruiseGuests: string;
  preCruise: boolean; // Choose or Not
  preCruiseRooms: string;
  preCruiseGuests: string;
  preCruiseType: boolean;  // Many Choices (See Below)
  postCruise: boolean; // Choose or Not
  postCruiseRooms: string;
  postCruiseGuests: string;
  postCruiseType: boolean;   // Many Choices (See Below)
  amenity: boolean; // Many Choices (See Below)
  budget: string;

  constructor(private travelService: TravelService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.passwordError = false;
    this.usernameError = false;
    // Add ngoninit from account-info
  }

  create() {
    this.ngOnInit();
    this.username = this.travelRequestForm.value.username;
  	this.password = this.travelRequestForm.value.password;
  	this.firstName = this.travelRequestForm.value.firstName;
  	this.lastName = this.travelRequestForm.value.lastName;
  	this.firstName = this.travelRequestForm.value.firstName;
  	this.lastName = this.travelRequestForm.value.lastName;
  	this.departureCity = this.travelRequestForm.value.departureCity;
  	this.destination = this.travelRequestForm.value.destination;
  	this.numGuest = this.travelRequestForm.value.numGuest;
  	this.numAdult = this.travelRequestForm.value.numAdult;
  	this.numChild = this.travelRequestForm.value.numChild;
  	this.childAge = this.travelRequestForm.value.childAge;
  	this.departDate = this.travelRequestForm.value.departDate;
  	this.returnDate = this.travelRequestForm.value.returnDate;
  	this.flexible = this.travelRequestForm.value.flexible; // Two Choices
  	this.departTime = this.travelRequestForm.value.departTime; // Many Choices (See Below)
  	this.returnTime = this.travelRequestForm.value.returnTime; // Many Choices (See Below)
  	this.travelMethod = this.travelRequestForm.value.travelMethod; // Many Choices (See Below)
  	this.hotel = this.travelRequestForm.value.hotel;  // Choose or Not
  	this.hotelRooms = this.travelRequestForm.value.hotelRooms;
  	this.hotelGuestNum = this.travelRequestForm.value.hotelGuestNum;
  	this.roomType = this.travelRequestForm.value.roomType; // Many Choices (See Below)
  	this.homeShare = this.travelRequestForm.value.homeShare; // Choose or Not
  	this.homeRooms = this.travelRequestForm.value.homeRooms;
  	this.homeGuests = this.travelRequestForm.value.homeGuests;
  	this.allInclusive = this.travelRequestForm.value.allInclusive; // Choose or Not
  	this.allIncRooms = this.travelRequestForm.value.allIncRooms;
  	this.allIncGuests = this.travelRequestForm.value.allIncGuests;
  	this.allIncType = this.travelRequestForm.value.allIncType; // Many Choices (See Below)
  	this.cruise = this.travelRequestForm.value.cruise; // Choose or Not
  	this.cruiseCabins = this.travelRequestForm.value.cruiseCabins;
  	this.cruiseGuests = this.travelRequestForm.value.cruiseGuests;
  	this.preCruise = this.travelRequestForm.value.preCruise; // Choose or Not
  	this.preCruiseRooms = this.travelRequestForm.value.preCruiseRooms;
  	this.preCruiseGuests = this.travelRequestForm.value.preCruiseGuests;
  	this.preCruiseType = this.travelRequestForm.value.preCruiseType;  // Many Choices (See Below)
  	this.postCruise = this.travelRequestForm.value.postCruise; // Choose or Not
  	this.postCruiseRooms = this.travelRequestForm.value.postCruiseRooms;
  	this.postCruiseGuests = this.travelRequestForm.value.postCruiseGuests;
  	this.postCruiseType = this.travelRequestForm.value.postCruiseType;   // Many Choices (See Below)
  	this.amenity = this.travelRequestForm.value.amenity; // Many Choices (See Below)
  	this.budget = this.travelRequestForm.value.budget;
    const newTrip: Travel = {
    username: this.username,
    password: this.password,
    firstName: this.firstName,
    lastName: this.lastName,
    departureCity: this.departureCity,
    destination: this.destination,
    numGuest: this.numGuest,
    numAdult: this.numAdult,
    numChild: this.numChild,
    childAge: this.childAge,
    departDate: this.departDate,
    returnDate: this.returnDate,
    flexible: this.flexible, // Two Choices
    departTime: this.departTime, // Many Choices (See Below)
    returnTime: this.returnTime, // Many Choices (See Below)
    travelMethod: this.travelMethod, // Many Choices (See Below)
    hotel: this.hotel,  // Choose or Not
    hotelRooms: this.hotelRooms,
    hotelGuestNum: this.hotelGuestNum,
    roomType: this.roomType, // Many Choices (See Below)
    homeShare: this.homeShare, // Choose or Not
    homeRooms: this.homeRooms,
    homeGuests: this.homeGuests,
    allInclusive: this.allInclusive, // Choose or Not
    allIncRooms: this.allIncRooms,
    allIncGuests: this.allIncGuests,
    allIncType: this.allIncType, // Many Choices (See Below)
    cruise: this.cruise, // Choose or Not
    cruiseCabins: this.cruiseCabins,
    cruiseGuests: this.cruiseGuests,
    preCruise: this.preCruise, // Choose or Not
    preCruiseRooms: this.preCruiseRooms,
    preCruiseGuests: this.preCruiseGuests,
    preCruiseType: this.preCruiseType,  // Many Choices (See Below)
    postCruise: this.postCruise, // Choose or Not
    postCruiseRooms: this.postCruiseRooms,
    postCruiseGuests: this.postCruiseGuests,
    postCruiseType: this.postCruiseType,   // Many Choices (See Below)
    amenity: this.amenity, // Many Choices (See Below)
    budget: this.budget
  };

  this.travelService.createTrip(this.tid, newTrip).subscribe(
    (travel: Travel) => {
      this.router.navigate(['user', this.uid, 'client-itinerary']);
      }
    );
  }
}

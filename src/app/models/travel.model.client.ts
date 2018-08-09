export class Travel {
	_id?: string;
	username: string,
	password: string,
	firstName: string,
	lastName: string,
	departureCity: string,
	destination: string,
	numGuest: string,
	numAdult: string,
	numChild: string,
	childAge: "",
	departDate: "",
	returnDate: "",
	flexible: boolean, // Two Choices
	departTime: boolean, // Many Choices (See Below)
	returnTime: boolean, // Many Choices (See Below)
	travelMethod: boolean, // Many Choices (See Below)
	hotel: boolean,  // Choose or Not
	hotelRooms: string,
	hotelGuestNum: string,
	roomType: boolean, // Many Choices (See Below)
	homeShare: boolean, // Choose or Not
	homeRooms: string,
	homeGuests: string,
	allInclusive: boolean, // Choose or Not
	allIncRooms: string,
	allIncGuests: string,
	allIncType: boolean, // Many Choices (See Below)
	cruise: boolean, // Choose or Not
	cruiseCabins: string,
	cruiseGuests: string,
	preCruise: boolean, // Choose or Not
	preCruiseRooms: string,
	preCruiseGuests: string,
	preCruiseType: boolean,  // Many Choices (See Below)
	postCruise: boolean, // Choose or Not
	postCruiseRooms: string,
	postCruiseGuests: string,
	postCruiseType: boolean,   // Many Choices (See Below)
	amenity: boolean, // Many Choices (See Below)
	budget: string,

	// Do I need variables to represent the travel details/preferences, passport details and the contact preference

	constructor(_id, username, password, firstName, lastName, dob, gender, country, state, city, phone, email) {
		this._id = _id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.departureCity = departureCity;
		this.destination = destination;
		this.numGuest = numGuest;
		this.numAdult = numAdult;
		this.numChild = numChild;
		this.childAge = childAge;
		this.departDate = departDate;
		this.returnDate = returnDate;
		this.flexible = flexible; // Two Choices
		this.departTime = departTime; // Many Choices (See Below)
		this.returnTime = returnTime; // Many Choices (See Below)
		this.travelMethod = travelMethod; // Many Choices (See Below)
		this.hotel = hotel;  // Choose or Not
		this.hotelRooms = hotelRooms;
		this.hotelGuestNum = hotelGuestNum;
		this.roomType = roomType; // Many Choices (See Below)
		this.homeShare = homeShare; // Choose or Not
		this.homeRooms = homeRooms;
		this.homeGuests = homeGuests;
		this.allInclusive = allInclusive; // Choose or Not
		this.allIncRooms = allIncRooms;
		this.allIncGuests = allIncGuests;
		this.allIncType = allIncType; // Many Choices (See Below)
		this.cruise = cruise; // Choose or Not
		this.cruiseCabins = cruiseCabins;
		this.cruiseGuests = cruiseGuests;
		this.preCruise = preCruise; // Choose or Not
		this.preCruiseRooms = preCruiseRooms;
		this.preCruiseGuests = preCruiseGuests;
		this.preCruiseType = preCruiseType;  // Many Choices (See Below)
		this.postCruise = postCruise; // Choose or Not
		this.postCruiseRooms = postCruiseRooms;
		this.postCruiseGuests = postCruiseGuests;
		this.postCruiseType = postCruiseType;   // Many Choices (See Below)
		this.amenity = amenity; // Many Choices (See Below)
		this.budget = budget;
	}
}
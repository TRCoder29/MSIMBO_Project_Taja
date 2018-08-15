export class Travel {
	_id?: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	departureCity: string;
	destination: string;
	numGuest: string;
	numAdult: string;
	numChild: string;
	childAge: string;
	departDate: string;
	returnDate: string;
	flexible?: boolean;
	departTime?: boolean;
	returnTime?: boolean;
	travelMethod?: boolean;
	hotel?: boolean;
	hotelRooms?: string;
	hotelGuestNum?: string;
	roomType?: boolean;
	homeShare?: boolean;
	homeRooms?: string;
	homeGuests?: string;
	allInclusive?: boolean;
	allIncRooms?: string;
	allIncGuests?: string;
	allIncType?: boolean;
	cruise?: boolean;
	cruiseCabins?: string;
	cruiseGuests?: string;
	preCruise?: boolean;
	preCruiseRooms?: string;
	preCruiseGuests?: string;
	preCruiseType?: boolean;
	postCruise?: boolean;
	postCruiseRooms?: string;
	postCruiseGuests?: string;
	postCruiseType?: boolean;
	amenity?: boolean;
	budget?: string;

	// Add other variables created in the html form
	// Do I need variables to represent the travel details/preferences; passport details and the contact preference

	constructor(_id, username, password, firstName, lastName, departureCity, destination, numGuest, numAdult, numChild, childAge,
		departDate, returnDate, flexible, departTime, returnTime, travelMethod, hotel, hotelRooms, hotelGuestNum, roomType, homeShare, homeRooms, homeGuests, allInclusive, allIncRooms, allIncGuests, allIncType, cruise, cruiseCabins,
		cruiseGuests, preCruise, preCruiseRooms, preCruiseGuests, preCruiseType, postCruise, postCruiseRooms, postCruiseGuests, postCruiseType,
		amenity, budget) {
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
		this.flexible = flexible;
		this.departTime = departTime;
		this.returnTime = returnTime;
		this.travelMethod = travelMethod;
		this.hotel = hotel;
		this.hotelRooms = hotelRooms;
		this.hotelGuestNum = hotelGuestNum;
		this.roomType = roomType;
		this.homeShare = homeShare;
		this.homeRooms = homeRooms;
		this.homeGuests = homeGuests;
		this.allInclusive = allInclusive;
		this.allIncRooms = allIncRooms;
		this.allIncGuests = allIncGuests;
		this.allIncType = allIncType;
		this.cruise = cruise;
		this.cruiseCabins = cruiseCabins;
		this.cruiseGuests = cruiseGuests;
		this.preCruise = preCruise;
		this.preCruiseRooms = preCruiseRooms;
		this.preCruiseGuests = preCruiseGuests;
		this.preCruiseType = preCruiseType;
		this.postCruise = postCruise;
		this.postCruiseRooms = postCruiseRooms;
		this.postCruiseGuests = postCruiseGuests;
		this.postCruiseType = postCruiseType;
		this.amenity = amenity;
		this.budget = budget;
	}
}

	
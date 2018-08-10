var mongoose = require('mongoose');

var TravelSchema = mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	departureCity: String,
	destination: String,
	numGuest: String,
	numAdult: String,
	numChild: String,
	childAge: {type: Array, default: ""},
	departDate: Date,
	returnDate: Date,
	flexible: Boolean, // Two Choices
	departTime: Boolean, // Many Choices (See Below)
	returnTime: Boolean, // Many Choices (See Below)
	travelMethod: Boolean, // Many Choices (See Below)
	hotel: Boolean,  // Choose or Not
	hotelRooms: String,
	hotelGuestNum: String,
	roomType: Boolean, // Many Choices (See Below)
	homeShare: Boolean, // Choose or Not
	homeRooms: String,
	homeGuests: String,
	allInclusive: Boolean, // Choose or Not
	allIncRooms: String,
	allIncGuests: String,
	allIncType: Boolean, // Many Choices (See Below)
	cruise: Boolean, // Choose or Not
	cruiseCabins: String,
	cruiseGuests: String,
	preCruise: Boolean, // Choose or Not
	preCruiseRooms: String,
	preCruiseGuests: String,
	preCruiseType: Boolean,  // Many Choices (See Below)
	postCruise: Boolean, // Choose or Not
	postCruiseRooms: String,
	postCruiseGuests: String,
	postCruiseType: Boolean,   // Many Choices (See Below)
	amenity: Boolean, // Many Choices (See Below)
	budget: String,
	isAdmin: {type:Boolean, default: false },
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'travel'})

module.exports = TravelSchema;



	// morning: Boolean,
	// afternoon: Boolean,
	// evening: Boolean,
	// night: Boolean,
	// noPreference: Boolean,

	// flight: Boolean,
	// car: Boolean,
	// bus: Boolean,
	// rail: Boolean,
	// hotelTransfer: Boolean,
	// chauffer: Boolean,
	// noPreference: Boolean,

	// hotelDouble: Boolean,
	// hotelQueen: Boolean,
	// hotelKing: Boolean,
	// hotelSuite: Boolean,

	// hotelDouble: Boolean,
	// hotelQueen: Boolean,
	// hotelKing: Boolean,
	// hotelSuite: Boolean,

	// aircondition: Boolean,
	// hairDryer: Boolean,
	// clothesIron: Boolean,
	// miniFridge: Boolean,
	// coffee: Boolean,
	// miniBar: Boolean,
	// microwave: Boolean,
	// kitchenette: Boolean,
	// consierge: Boolean,
	// laundry: Boolean,
	// roomService: Boolean,
	// businessCenter: Boolean,
	// spa: Boolean,
	// coffee: Boolean,
	// restaurant: Boolean,
	// breakfast: Boolean,
	// parking: Boolean,
	// shuttle: Boolean,
	// noPreference: Boolean,


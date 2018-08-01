export class User {
	_id?: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	dob: string;
	gender: string;
	country: string;
	state: string;
	city: string;
	email: string;
	phone: string;
	prefPhone: boolean;
	prefEmail: boolean;
	idNum?: string;
	idType?: string;
	idDate?: string;
	idCountry?: string;
	idState?: string;
	redress?: string;
	knownTravelNum?: string;

	// Do I need variables to represent the passport details and the contact preference

	constructor(_id, username, password, firstName, lastName, dob, gender, country, state, city, 
		phone, email, prefPhone, prefEmail, idNum, idType, idDate, idCountry, idState, redress, knownTravelNum) {
		this._id = _id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.gender = gender;
		this.country = country;
		this.state = state;
		this.city = city;
		this.phone = phone;
		this.email = email;
		this.prefPhone = prefPhone;
		this.prefEmail = prefEmail;
		this.idNum = idNum;
		this.idType = idType;
		this.idDate = idDate;
		this.idCountry = idCountry;
		this.idState = idState;
		this.redress = redress;
		this.knownTravelNum = knownTravelNum;
	}
}
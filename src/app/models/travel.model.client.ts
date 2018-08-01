export class Travel {
	_id?: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
	dob: number;
	gender: string;
	country: string;
	state: string;
	city: string;
	phone: string;

	// Do I need variables to represent the travel details/preferences, passport details and the contact preference

	constructor(_id, username, password, firstName, lastName, dob, gender, country, state, city, phone, email) {
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
	}
}
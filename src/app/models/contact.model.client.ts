export class Contact {
	_id?: string;
	name: string;
	phone: string;
	email: string;
	subject: string;
	comment: string;

	constructor(_id, name, phone, email, subject, comment) {
	this._id = _id;
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.subject = subject;
	this.comment = comment;
	}
}
var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
	contactId: {type: mongoose.Schema.Types.ObjectId, ref: 'ContactModel'},
	name: String,
	phone: String,
	email: String,
	subject: String,
	comment: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'contact'})

module.exports = ContactSchema;
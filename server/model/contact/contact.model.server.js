var mongoose = require('mongoose');
var ContactSchema = require ('./contact.schema.server.js');
var ContactModel = mongoose.model('ContactModel', ContactSchema);

ContactModel.createContact = createContact;
ContactModel.findContactsById = findContactsById;
ContactModel.findContactsByUser = findContactsByUser;
ContactModel.findContactsByName = findContactsByName;
ContactModel.findContactsByPhone = findContactsByPhone;
ContactModel.findContactsByEmail = findContactsByEmail;
ContactModel.updateContact = updateContact;
ContactModel.DeleteContact = DeleteContact;

function createContact(contact){
	return ContactModel.create(contact);
}

function findContactsById(cid){
	return ContactModel.findById(cid);
}

function findContactsByUser(uid){
	return ContactModel.find({userId: uid}).sort({name: 1});
}

function findContactsByName(name){
	return ContactModel.findByName(name);
}

function findContactsByPhone(phone){
	return ContactModel.findByPhone(phone);
}

function findContactsByEmail(email){
	return ContactModel.findByEmail(email);
}

function updateContact(cid, contact){
	return ContactModel.update({_id: cid}, contact);
}

function DeleteContact(bid){
	return ContactModel.remove({_id: cid});
}

module.exports = ContactModel;
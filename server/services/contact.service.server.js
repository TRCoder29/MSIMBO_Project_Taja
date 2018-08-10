module.exports = function(app){

// contact: Contact[] = [
//  {_id: "123", contactId: "1136", title: "Contact 1", entry: "A contact entry."},
//  {_id: "123", adminId: "1136", title: "Contact 2", entry: "Another contact entry."}
//  ]

 var contactModel = require ('../model/contact/contact.model.server.js');

	app.post('/api/contact/:cid', createContact);
  app.get('/api/admin/:cid/contact', findContactsById);
 	app.get('/api/admin/:uid/contact', findContactsByUser);
 	// How should these be formatted? Should I also include a findContactById feature?
	app.get('/api/contact/:cid', findContactsByName);
	app.get('/api/contact/:cid', findContactsByPhone);
	app.get('/api/contact/:cid', findContactsByEmail);
	app.put('/api/contact/:cid', updateContact);
	app.delete('/api/contact/:cid', deleteContact)


	function createContact(req, res) {
  	var contact = req.body;
    contactModel.createContactForAdmin(contact).then(
      (data) => {
        res.json(data);
      }
    );
  }


  function findContactsById(req, res) {
    var cid = req.params['cid'];
    contactModel.findContactsById(cid).then(
      (contact) => {
        res.json(contact);
      }
    )
  }

  function findContactsByUser(req, res){
  	var aid = req.params['uid'];
    contactModel.findContactsByUser(uid).then(
      (contacts) => {
        res.json(contacts);
      }
    );
  }

// How should these be formatted? Req rarams doesn't look like it'll be the right fit

  function findContactsByName(req, res) {
  	var name = req.params['name'];
    contactModel.findContactsByName(name).then(
      (contact) => {
        res.json(contact);
      }
    )
  }


    function findContactsByPhone(req, res) {
  	var phone = req.params['phone'];
    contactModel.findContactsByPhone(phone).then(
      (contact) => {
        res.json(contact);
      }
    )
  }

  function findContactsByEmail(req, res) {
  	var email = req.params['email'];
    contactModel.findContactsByEmail(email).then(
      (contact) => {
        res.json(contact);
      }
    )
  }



  function updateContact(req, res) {
  	var cid = req.params['cid'];
  	var contact = req.body;
    contactModel.updateContact(cid, contact).then(
      data => {
        res.json(data);
      }
    );
  }


  function deleteContact(req, res) {
  	var cid = req.params['cid'];
    contactModel.deleteContact(cid).then(
      data => {
        res.json(data);
      }
    )
  }
}

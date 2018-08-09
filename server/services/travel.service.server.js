module.exports = function(app){

// travel: Travel[] = [
//  {_id: "123", username: "new", password: "new", firstName: "new", lastName: "new", email: "new@email.com", dob: 01/01/2000, gender: Female, country: "US", state: "MA", city: "Boston",  phone: "555-123-4567"},
//  ]

 var travelModel = require ('../model/travel/travel.model.server.js');

	app.post('/api/user/:uid/travel/new', createTrip);
 	app.get('/api/user/:uid/travel/:tid', findTripByUser);
	app.get('/api/travel/:tid', findTripById);
	app.put('/api/travel/:tid/edit', updateTripRequest);
	app.delete('/api/travel/:tid', deleteTripRequest)


	function createTrip(req, res) {
  	var travel = req.body;
    travelModel.createTravelForUser(travel).then(
      (data) => {
        res.json(data);
      }
    );
  }


  function findTripByUser(req, res){
  	var uid = req.params['uid'];
    travelModel.findTripByUser(uid).then(
      (travels) => {
        res.json(travels);
      }
    );
  }


  function findTripById(req, res) {
  	var bid = req.params['tid'];
    travelModel.findTripById(tid).then(
      (travel) => {
        res.json(travel);
      }
    )
  }


  function updateTripRequest(req, res) {
  	var tid = req.params['tid'];
  	var travel = req.body;
    travelModel.updateTrip(tid, travel).then(
      data => {
        res.json(data);
      }
    );
  }


  function deleteTripRequest(req, res) {
  	var tid = req.params['tid'];
    travelModel.deleteTrip(tid).then(
      data => {
        res.json(data);
      }
    )
  }
}

var mongoose = require('mongoose');
var TravelSchema = require ('./travel.schema.server.js');
var TravelModel = mongoose.model('TravelModel', TravelSchema);

TravelModel.createTripRequest = createTripRequest;
TravelModel.findTripRequest = findTripRequest;
TravelModel.findTripById = findTripById;
TravelModel.findTripByUser = findTripByUser;
TravelModel.updateTripRequest = updateTripRequest;
TravelModel.deleteTripRequest = deleteTripRequest;
// TravelModel.findTrips = findTrips;

function createTripRequest(trip){
	return TravelModel.create(trip);
}

function findTripRequest(){
	return TravelModel.find();
}

function findTripById(tid){
	return TravelModel.findById(tid);
}

function findTripByUser(username){
	return TravelModel.findOne({username:username});
}

function updateTripRequest (tid, trip){
	return TravelModel.update({_id: tid}, trip);
}

function deleteTripRequest (tid){
	return TravelModel.remove({_id: tid});
}

module.exports = TravelModel;


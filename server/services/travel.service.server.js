// module.exports = function(app){

// // travel: Travel[] = [
// //  {_id: "123", username: "new", password: "new", firstName: "new", lastName: "new", email: "new@email.com", dob: 01/01/2000, gender: Female, country: "US", state: "MA", city: "Boston",  phone: "555-123-4567"},
// //  ]

//  var travelModel = require ('../model/travel/travel.model.server.js');

// 	app.post('/api/user/:uid/travel', createTravel);
//  	app.get('/api/user/:uid/travel', findTravelByUser);
// 	app.get('/api/travel/:tid', findTravelById);
// 	app.put('/api/travel/:tid', updateTravel);
// 	app.delete('/api/travel/:tid', deleteTravel)


// 	function createTravel(req, res) {
//   	var travel = req.body;
//     travelModel.createTravelForUser(travel).then(
//       (data) => {
//         res.json(data);
//       }
//     );
//   }


//   function findTravelByUser(req, res){
//   	var uid = req.params['uid'];
//     travelModel.findTravelByUser(uid).then(
//       (travels) => {
//         res.json(travels);
//       }
//     );
//   }


//   function findTravelById(req, res) {
//   	var bid = req.params['tid'];
//     travelModel.findTravelById(tid).then(
//       (travel) => {
//         res.json(travel);
//       }
//     )
//   }


//   function updateTravel(req, res) {
//   	var tid = req.params['tid'];
//   	var travel = req.body;
//     travelModel.updateTravel(tid, travel).then(
//       data => {
//         res.json(data);
//       }
//     );
//   }


//   function deleteTravel(req, res) {
//   	var tid = req.params['tid'];
//     travelModel.deleteTravel(tid).then(
//       data => {
//         res.json(data);
//       }
//     )
//   }
// }

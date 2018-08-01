module.exports = function(app){

	var bcrypt = require("bcrypt-nodejs");
	var userModel = require('../model/user/user.model.server.js');

	var passport = require('passport');
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);

	var LocalStrategy = require('passport-local').Strategy;
	passport.use(new LocalStrategy(localStrategy));

	// users: User[] = [
	// {_id: "123", username: "new", password: "new", firstName: "New", lastName: "Person", dob: 1/1/1970, gender: Female, country: USA, state: Chicago, city: Illinois, phone: 123-555-0123, email: "new@gmail.com"},
	// {_id: "123", username: "tom", password: "tom", firstName: "Tom", lastName: "Guy", dob: 1/1/1980, gender: Male, country: USA, state: New York, city: New York, phone: 123-555-4567, email: "tom@gmail.com"},
	// {_id: "123", username: "jane", password: "jane", firstName: "Jane", lastName: "Smith", dob: 1/1/1990, gender: Female, country: USA, state: Orlando, city: Florida, phone: 123-555-8910, email: "jane@gmail.com"},
	// ];

	app.post('/api/user', createUser);
	app.post('/api/register', register);
	app.post  ('/api/login', passport.authenticate('local'), login);
	app.post ('/api/loggedIn', loggedIn);
	app.post('/api/logout', logout);
	app.get('/api/user/:uid', findUserById);
	app.get('/api/user', findUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('api/user/:uid', deleteUser);


	function serializeUser(user, done) {
	    done(null, user);
	}

	function deserializeUser(user, done) {
		userModel
			.findUserById(user._id)
			.then(
				function(user){
	                done(null, user);
	            },
	            function(err){
	                done(err, null);
	            }
	        );
	}

	function localStrategy(username, password, done) {
		userModel.findUserByUsername(username).then(
			(user) => {
				if(user && bcrypt.compareSync(password, user.password)) {
					return done(null, user);
                } else {
                    return done(null, false);
                }
			}
		)
   }


	function createUser(req, res) {
		var user = req.body;
		userModel.createUser(user).then(
			(data) => {
				res.json(data);
			}
		)
  	}

  	function register (req, res) {
  		var user = req.body;
  		user.password = bcrypt.hashSync(user.password);
  		userModel.createUser(user).then(
  			function(user){
  				req.login(user, function(err) {
  					res.json(user);
  				});
            }
        );    	
	}

	function login(req, res) {
	   var user = req.user;
	   res.json(user);
	}

	function loggedIn(req, res) {
	    if(req.isAuthenticated()){
	    	res.send(req.user);
	    }else{
	    	res.send("0");
	    }
	}

	function logout(req, res) {
	   req.logOut();
	   res.send(200);
	}

	function findUserById(req, res) {
		var uid = req.params["uid"];
		userModel.findUserById(uid).then(
			data => {
				res.json(data);
			}
		)
	}

	function findUser(req, res) {
		const username = req.query['username'];
		const password = req.query['password'];
		if(username && password) {
			userModel.findUserByCredentials(username, password).then(
				data => {
					res.json(data);
				}
			);
			return;
		}
		// find user by username
		if(username) {
			userModel.findUserByUsername(username).then(
				data => {
					res.json(data);
				}
			);
			return
		}
		res.json(users);
	}


    function updateUser(req, res) {
    	var uid = req.params['uid'];
    	var user = req.body;
    	console.log(uid);
    	console.log(user);
    	userModel.updateUser(uid, user).then(
    		data => {
    			res.json(data);
    		}
    	);
  	}


    function deleteUser(req, res) {
	    var uid = req.params['uid'];
	    userModel.deleteUser(uid).then(
	    	data => {
	    		res.json(data);
	    	}
	    );
	}

}

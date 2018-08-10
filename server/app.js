module.exports = function(app) {
	require("./model/models.server.js");
	require("./services/user.service.server.js")(app);
	require("./services/blog.service.server.js")(app);
<<<<<<< HEAD
	// require("./services/travel.service.server.js")(app);
	require("./services/contact.service.server.js")(app);
=======
	require("./services/travel.service.server.js")(app);
>>>>>>> 5013fe52c47adb7fe1105c5971daa81efd4d5bd1
}
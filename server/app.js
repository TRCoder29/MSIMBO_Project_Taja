module.exports = function(app) {
	require("./model/models.server.js");
	require("./services/user.service.server.js")(app);
	require("./services/blog.service.server.js")(app);
	require("./services/travel.service.server.js")(app);
}
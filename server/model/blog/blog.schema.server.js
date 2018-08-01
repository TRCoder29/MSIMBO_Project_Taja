var mongoose = require('mongoose');

var BlogSchema = mongoose.Schema({
	adminId: {type: mongoose.Schema.Types.ObjectId, ref: 'BlogModel'},
	title: String,
	entry: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'blog'})

module.exports = BlogSchema;
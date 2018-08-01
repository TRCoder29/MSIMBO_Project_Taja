var mongoose = require('mongoose');
var BlogSchema = require ('./blog.schema.server.js');
var BlogModel = mongoose.model('BlogModel', BlogSchema);

BlogModel.createBlog = createBlog;
BlogModel.findBlogById = findBlogById;
BlogModel.findBlogsByAdmin = findBlogsByAdmin;
BlogModel.updateBlog = updateBlog;
BlogModel.deleteBlog = deleteBlog;

function createBlog(blog){
	return BlogModel.create(blog);
}

function findBlogsByAdmin(aid){
	return BlogModel.find({adminId: aid}).sort({name: 1});
}

function findBlogById(bid){
	return BlogModel.findById(bid);
}

function updateBlog(bid, blog){
	return BlogModel.update({_id: bid}, blog);
}

function deleteBlog(bid){
	return BlogModel.remove({_id: bid});
}

module.exports = BlogModel;
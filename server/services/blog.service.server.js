module.exports = function(app){

// blogs: Blog[] = [
//  {_id: "123", adminId: "1136", title: "Blog 1", entry: "A blog entry."},
//  {_id: "123", adminId: "1136", title: "Blog 2", entry: "Another blog entry."}
//  ]

 var blogModel = require ('../model/blog/blog.model.server.js');

	app.post('/api/admin/:aid/blog', createBlog);
 	app.get('/api/admin/:aid/blog', findBlogsByAdmin);
	app.get('/api/blog/:bid', findBlogById);
	app.put('/api/blog/:bid', updateBlog);
	app.delete('/api/blog/:bid', deleteBlog)


	function createBlog(req, res) {
  	var blog = req.body;
    blogModel.createBlogForAdmin(blog).then(
      (data) => {
        res.json(data);
      }
    );
  }


  function findBlogsByAdmin(req, res){
  	var aid = req.params['aid'];
    blogModel.findBlogsByAdmin(aid).then(
      (blogs) => {
        res.json(blogs);
      }
    );
  }


  function findBlogById(req, res) {
  	var bid = req.params['bid'];
    blogModel.findBlogById(bid).then(
      (blog) => {
        res.json(blog);
      }
    )
  }


  function updateBlog(req, res) {
  	var bid = req.params['bid'];
  	var blog = req.body;
    blogModel.updateBlog(bid, blog).then(
      data => {
        res.json(data);
      }
    );
  }


  function deleteBlog(req, res) {
  	var bid = req.params['bid'];
    blogModel.deleteBlog(bid).then(
      data => {
        res.json(data);
      }
    )
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../../../../client_side_services/blog.service.client'
import { Blog } from '../../../../models/blog.model.client'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

@ViewChild('f') blogForm: NgForm;

uid: string;
blogs: Blog[];
title: string;
entry: string;
blog: Blog = {
	userId: "",
	title: "",
	entry: ""
};
bid: string;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	  this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.bid = params['bid'];
  		this.blogService.findBlogsByAdmin(this.uid).subscribe(
        (blogs: Blog[]) => {
          this.blogs = blogs;
        }
       );
  		this.blogService.findBlogById(this.bid).subscribe(
        (blog: Blog) => {
          this.blog = blog;
          this.title = this.blog.title;
          this.entry = this.blog.entry;
        }
      );
    })
  }

  update(){
    this.title = this.blogForm.value.title;
    this.entry = this.blogForm.value.entry;
    
    const updatedWeb: Blog = {
      _id: this.bid,
      title: this.title,
      userId: this.uid,
      entry: this.entry
    }
    this.blogService.updateBlog(this.bid, updatedWeb).subscribe(
      (blog: Blog) => {
        this.router.navigate(['user', this.uid, 'blog']);
      }
    );
  }

  delete(){
    this.blogService.deleteBlog(this.bid).subscribe(
      (blogs: Blog[]) => {
        this.router.navigate(['user', this.uid, 'blog']);
      }
    );
  }

}

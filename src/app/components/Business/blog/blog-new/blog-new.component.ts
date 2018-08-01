import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../../../../client_side_services/blog.service.client'
import { Blog } from '../../../../models/blog.model.client'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {

@ViewChild('f') blogForm: NgForm;

uid: string;
blogs: Blog[];
title: string;
entry: string;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
      this.blogService.findBlogsByAdmin(this.uid).subscribe(
        (blogs: Blog[]) => {
          this.blogs = blogs;
        }
      );  
    });
  }

  create(){
    this.title = this.blogForm.value.title;
    this.entry = this.blogForm.value.entry;
    const newBlog: Blog = {
    title: this.title,
    userId: this.uid,
    entry: this.entry
  };

  this.blogService.createBlog(this.uid, newBlog).subscribe(
    (blog: Blog) => {
      this.router.navigate(['user', this.uid, 'blog']);
      }
    );
  }
}

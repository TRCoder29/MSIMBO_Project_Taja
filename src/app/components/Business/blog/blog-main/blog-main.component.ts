import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../client_side_services/blog.service.client'
import { Blog } from '../../../../models/blog.model.client'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}

// uid: string;
// blogs: Blog[];

//   constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

//   ngOnInit() {
//     this.activatedRoute.params.subscribe(params => {
//       this.uid = params['uid'];
//       this.blogService.findBlogsByUser(this.uid).subscribe(
//         (blogs: Blog[]) => {
//           this.blogs = blogs;
//         }
//       );
//     });
//   }
// }
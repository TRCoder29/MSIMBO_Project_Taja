import { Injectable } from '@angular/core';
import {Blog} from '../models/blog.model.client';
import { map } from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class BlogService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

// blogs: Blog[] = [
//  {_id: "123", userId: "1136", title: "Blog 1", entry: "A blog entry."},
//  {_id: "123", userId: "1136", title: "Blog 2", entry: "Another blog entry."}
//  ]


  createBlog(userId: string, blog: Blog) {
      const url = this.baseUrl + '/api/user/' + userId + '/blog';
      return this.http.post(url, blog).pipe(map(
      (response: Response) => {
          return response.json();
      }
    ));
  }


  findBlogById(blogId: string) {
    const url = this.baseUrl + '/api/blog/' + blogId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  findBlogsByAdmin(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId + '/blog';
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  updateBlog(blogId: string, blog: Blog) {
    const url = this.baseUrl + '/api/blog/' + blogId;
    return this.http.put(url, blog).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  deleteBlog(blogId: string) {
    const url = this.baseUrl + '/api/blog/' + blogId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}
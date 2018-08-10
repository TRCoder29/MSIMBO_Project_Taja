import { Injectable } from '@angular/core';
import {Contact} from '../models/contact.model.client';
import { map } from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class ContactService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

// contacts: Contact[] = [
//  {},
//  ]


  createContact(contactId: string, contact: Contact) {
      const url = this.baseUrl + '/api/user/' + contactId + '/contact';
      return this.http.post(url, contact).pipe(map(
      (response: Response) => {
          return response.json();
      }
    ));
  }

  findContactsById(contactId: string) {
  const url = this.baseUrl + '/api/contact/' + contactId;
  return this.http.get(url).pipe(map(
    (response: Response) => {
      return response.json();
    }
  ));
}


  findContactsByUser(userId: string) {
    const url = this.baseUrl + '/api/contact/' + userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  findContactsByName(name: string) {
    const url = this.baseUrl + '/api/contact/' + name;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  findContactsByPhone(phone: string) {
    const url = this.baseUrl + '/api/contact/' + phone;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  findContactsByEmail(email: string) {
    const url = this.baseUrl + '/api/contact/' + email;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  updateContact(contactId: string, contact: Contact) {
  const url = this.baseUrl + '/api/contact/' + contactId;
  return this.http.put(url, contact).pipe(map(
    (response: Response) => {
      return response.json();
    }
  ));
}

  deleteBlog(contactId: string) {
    const url = this.baseUrl + '/api/contact/' + contactId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}
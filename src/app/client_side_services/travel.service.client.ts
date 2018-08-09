import { Injectable } from '@angular/core';
import {Travel} from '../models/travel.model.client';
import { map } from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class TravelService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

// travel: Travel[] = [
//  {_id: "123", username: "new", password: "new", firstName: "new", lastName: "new", email: "new@email.com", dob: 01/01/2000, gender: Female, country: "US", state: "MA", city: "Boston",  phone: "555-123-4567"},
//  ]


  createTrip(userId: string, travel: Travel) {
      const url = this.baseUrl + '/api/travel/' + userId + '/website';
      return this.http.post(url, travel).pipe(map(
      (response: Response) => {
          return response.json();
      }
    ));
  }


  findTripByUser(userId: string) {
  	const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  findTripById(travelId: string) {
    const url = this.baseUrl + '/api/website/' + travelId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  updateTripRequest(travelId: string, travel: Travel) {
    const url = this.baseUrl + '/api/travel-request/' + travelId;
    return this.http.put(url, travel).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  deleteTripRequest(travelId: string) {
    const url = this.baseUrl + '/api/travel-request/' + travelId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}
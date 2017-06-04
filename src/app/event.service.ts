import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import IEventModel from '../../server/interfaces/IEventModel';

@Injectable()
export class EventService {
  host:string = 'http://localhost:8080';

  constructor(private http: Http) { }


  getAllEvents() {
     return this.http.get( this.host + '/app/event/')
     .map(response => response.json());
  }

  getEvent(id) {
    return this.http.get( this.host + '/app/event/' + id)
    .map(response => response.json());
  }

  getVenues(id) {
    return this.http.get (this.host + '/app/event/' + id + '/venues/')
    .map(response => response.json());
  }

  postEvent(event:IEventModel) {
    var headers = new Headers(); 
    headers.append('Content-Type', 'application/json')
    return this.http.post (this.host + '/app/event/create', event,{
      headers: headers
    })
    .map(response => response.json());
  }
}


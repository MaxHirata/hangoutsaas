import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {ActivatedRoute, Params} from '@angular/router'; 

@Component({
  selector: 'view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  title:string;
  id: number;
  eventObject:any = {};
  venuesObject:any = {};

  constructor( event$:EventService, private route: ActivatedRoute) { 
    this.title = 'Event Name';
    this.id = this.route.snapshot.params.id;

    event$.getEvent(this.id)
    .subscribe(
      result => {
        console.log('result:' + result);
        this.eventObject = result;
        console.log('eventObject:' + JSON.stringify(this.eventObject));
      },
      () => {}, 
      () => {}
    );

    event$.getVenues(this.id)
    .subscribe(
      result => {
        this.venuesObject = result
        console.log('venuesObject:' + JSON.stringify(this.venuesObject));
      },
      () => {},
      () => {}
    );
   }
  

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventObject:any = [];

  constructor(event$:EventService) { 
    event$.getAllEvents()
    .subscribe(
      result => {
        console.log('result:' + result);
        this.eventObject = result;
        console.log('userObject' + this.eventObject);
      }, 
      () => {},
      () => {}
    );
  }

  ngOnInit() {
  }

}

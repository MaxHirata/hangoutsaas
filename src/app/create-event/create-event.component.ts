import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import IEventModel from '../../../server/interfaces/IEventModel';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent = {} as IEventModel;
  name: string;
  

  constructor(private event$:EventService) { 
    
  }

  ngOnInit() {
  }

  onClick() {
    this.event$.postEvent(this.newEvent)
    .subscribe(
      result => {
        this.newEvent = result; 
        console.log('post');
      },
      () => {},
      () => {}
    );
  }
}

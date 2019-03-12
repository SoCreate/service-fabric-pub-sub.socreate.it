import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-to-messages',
  templateUrl: './subscribe-to-messages.component.html'
})
export class SubscribeToMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

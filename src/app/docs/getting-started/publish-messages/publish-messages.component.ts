import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-messages',
  templateUrl: './publish-messages.component.html'
})
export class PublishMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

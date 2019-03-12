import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items = [
    {
      firstName: 'Loek',
      lastName: 'Duys',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/12125836?s=460&v=4',
      githubUrl: 'https://github.com/loekd',
      twitterUrl: 'https://twitter.com/LDuys'
    },
    {
      firstName: 'Dana',
      lastName: 'Desrosiers',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/4699783?s=460&amp;v=4',
      githubUrl: 'https://github.com/danadesrosiers'
    },
    {
      firstName: 'Jami',
      lastName: 'Lurock',
      avatarUrl: 'https://pbs.twimg.com/profile_images/479643327441018880/z9boZ906_400x400.jpeg',
      githubUrl: 'https://github.com/lurock',
      twitterUrl: 'https://twitter.com/maindg'
    }
    
  ];

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

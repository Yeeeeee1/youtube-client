import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  getApi() {
    let wrapper = document.getElementsByClassName(
      'wrapper'
    ) as HTMLCollectionOf<HTMLElement>;
    wrapper[0].style.display = 'flex';
  }

  showSettings() {
    let settings = document.getElementsByClassName(
      'settings-wrapper'
    ) as HTMLCollectionOf<HTMLElement>;
    if (settings[0].style.display === 'none') {
      settings[0].style.display = 'flex';
    } else {
      settings[0].style.display = 'none';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

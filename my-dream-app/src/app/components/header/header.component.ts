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
    let settings = document.getElementById('settings-wrapper');
    if (settings.style.display === 'none' || settings.style.display === '') {
      settings.style.display = 'flex';
    } else {
      settings.style.display = 'none';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

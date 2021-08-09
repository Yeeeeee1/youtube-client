import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';
  isSettingsOpen = false;
  isShowResults = false;

  openSettings(value: boolean): void {
    this.isSettingsOpen = value;
  }

  showResults(value: boolean): void {
    this.isShowResults = value;
  }
}

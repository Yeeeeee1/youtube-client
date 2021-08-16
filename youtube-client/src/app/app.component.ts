import { Component } from '@angular/core';
import { ISortModel } from './core/components/header/settings-component/models/sortModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';
  isSettingsOpen = false;

  openSettings(value: boolean): void {
    this.isSettingsOpen = value;
  }
}

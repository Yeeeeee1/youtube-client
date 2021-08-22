import { Component } from '@angular/core';
import { ISortModel } from './header/settings-component/models/sortModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';
  isSettingsOpen = false;
  isShowResults = false;
  sortObj: any = { term: '', mode: -1 };
  word = '';

  openSettings(value: boolean): void {
    this.isSettingsOpen = value;
  }

  showResults(value: boolean): void {
    this.isShowResults = value;
  }

  sort(value: ISortModel): void {
    this.sortObj = value;
  }

  sortByWord(value: string): void {
    this.word = value;
  }
}

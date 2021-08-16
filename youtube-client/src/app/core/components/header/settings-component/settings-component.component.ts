// eslint-disable-next-line object-curly-newline
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISortModel } from './models/sortModel';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.scss'],
})
export class SettingsComponentComponent {
  @Input() isSettingsOpen = false;

  @Output() clickSortEvent = new EventEmitter<ISortModel>();

  @Output() changeSortByWordEvent = new EventEmitter<string>();

  mode = -1;

  word = '';

  sortByDate(): void {
    this.mode = -this.mode;
    this.clickSortEvent.emit({ term: 'publishedAt', mode: this.mode });
  }

  sortByViews(): void {
    this.mode = -this.mode;
    this.clickSortEvent.emit({ term: 'viewCount', mode: this.mode });
  }

  sortByWord(): void {
    this.changeSortByWordEvent.emit(this.word);
  }
}

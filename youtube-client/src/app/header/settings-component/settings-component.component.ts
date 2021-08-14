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

  flag = false;

  word = '';

  sortByDate(): void {
    this.flag = !this.flag;
    this.clickSortEvent.emit({ term: 'publishedAt', flag: this.flag });
  }

  sortByViews(): void {
    this.flag = !this.flag;
    this.clickSortEvent.emit({ term: 'viewCount', flag: this.flag });
  }

  sortByWord(): void {
    this.changeSortByWordEvent.emit(this.word);
  }
}

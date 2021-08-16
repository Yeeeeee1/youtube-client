// eslint-disable-next-line object-curly-newline
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortService } from 'src/app/youtube/services/sort.service';
import { ISortModel } from './models/sortModel';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.scss'],
})
export class SettingsComponentComponent {
  @Input() isSettingsOpen = false;

  mode = -1;

  word = '';

  constructor(private sortService: SortService) {}

  sortByDate(): void {
    this.mode = -this.mode;
    this.sortService.addSortObj({ term: 'publishedAt', mode: this.mode });
  }

  sortByViews(): void {
    this.mode = -this.mode;
    this.sortService.addSortObj({ term: 'viewCount', mode: this.mode });
  }

  sortByWord(): void {
    this.sortService.addSortWord(this.word);
  }
}

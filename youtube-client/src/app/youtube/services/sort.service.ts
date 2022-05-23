import { Injectable, EventEmitter } from '@angular/core';
import { ISortModel } from 'src/app/core/components/header/settings-component/models/sortModel';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  changeSortObjEvent: EventEmitter<ISortModel> = new EventEmitter();
  changeSortWordEvent: EventEmitter<string> = new EventEmitter();

  addSortObj(sortObj: ISortModel): void {
    this.changeSortObjEvent.emit(sortObj);
  }

  addSortWord(word: string): void {
    this.changeSortWordEvent.emit(word);
  }
}

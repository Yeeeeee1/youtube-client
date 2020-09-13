import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  bol: boolean;
  bool: EventEmitter<boolean> = new EventEmitter();
  sho: boolean = false;
  show: EventEmitter<boolean> = new EventEmitter();
  searchTerm: string;
  filter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public doClick() {
    this.bol = true;
    this.bool.emit(this.bol);
  }

  public showSetting() {
    this.sho = !this.sho;
    this.show.emit(this.sho);
  }

  public searchFilter(value) {
    this.searchTerm = value;
    this.filter.emit(this.searchTerm);
  }
}

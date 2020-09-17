// search-input.component.ts

import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  pluck,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  bool: Boolean;

  constructor(private share: SearchService) {
    this.share.onClick.subscribe((cnt) => (this.bool = cnt));
  }

  showSettings() {
    this.share.doClick();
  }

  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value: string) => value.length > 3),
        map((value) => value)
      )
      .subscribe((value) => {
        this.search.emit(value);
      });
  }
}

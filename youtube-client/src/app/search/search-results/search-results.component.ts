import { Component, Input, OnChanges } from '@angular/core';
import { ISortModel } from '../../core/components/header/settings-component/models/sortModel';
import { mockVideoData } from 'src/assets/data/mockData';
import { ISearchResponseModel } from '../../youtube/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() sortObj: ISortModel = { term: 'publishedAt', mode: 1 };
  @Input() isShowResults = false;
  @Input() word = '';

  term = '';
  mode = -1;
  videoData: ISearchResponseModel = mockVideoData;

  ngOnChanges(): void {
    this.term = this.sortObj.term;
    this.mode = this.sortObj.mode;
  }
}

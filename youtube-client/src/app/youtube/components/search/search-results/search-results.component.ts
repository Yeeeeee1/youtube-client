import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ISortModel } from '../../../../core/components/header/settings-component/models/sortModel';
import { mockVideoData } from 'src/assets/data/mockData';
import { ISearchResponseModel } from '../../../models/search-response.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { Subscription } from 'rxjs';
import { SortService } from 'src/app/youtube/services/sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  constructor(private youtubeService: YoutubeService, private sortService: SortService) {}

  sortObj: ISortModel = { term: 'publishedAt', mode: 1 };
  word = '';
  term = '';
  mode = -1;
  videoData: ISearchResponseModel = mockVideoData;
  clickSearchEventSub: Subscription | null = new Subscription();
  changeSortObjEventSub: Subscription | null = new Subscription();
  changeSortWordEventSub: Subscription | null = new Subscription();

  ngOnInit(): void {
    this.youtubeService.clickSearchEvent.subscribe((data: ISearchResponseModel) => (this.videoData = data));
    this.sortService.changeSortObjEvent.subscribe((data: ISortModel) => {
      this.sortObj = data;
      this.term = this.sortObj.term;
      this.mode = this.sortObj.mode;
    });
    this.sortService.changeSortWordEvent.subscribe((data: string) => {
      this.word = data;
    });
  }

  ngOnDestroy(): void {
    if (this.clickSearchEventSub) {
      this.clickSearchEventSub.unsubscribe();
      this.clickSearchEventSub = null;
    }
    if (this.changeSortObjEventSub) {
      this.changeSortObjEventSub.unsubscribe();
      this.changeSortObjEventSub = null;
    }
    if (this.changeSortWordEventSub) {
      this.changeSortWordEventSub.unsubscribe();
      this.changeSortWordEventSub = null;
    }
  }
}

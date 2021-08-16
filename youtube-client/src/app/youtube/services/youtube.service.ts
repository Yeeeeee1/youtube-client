import { Injectable, EventEmitter } from '@angular/core';
import { mockVideoData } from 'src/assets/data/mockData';
import { ISearchResponseModel } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  clickSearchEvent: EventEmitter<ISearchResponseModel> = new EventEmitter();

  getData(): ISearchResponseModel {
    return mockVideoData;
  }
  showResults(data: ISearchResponseModel): void {
    this.clickSearchEvent.emit(data);
  }
}

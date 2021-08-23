import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { mockVideoData } from 'src/assets/data/mockData';
import { ISearchResponseModel } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  clickSearchEvent: EventEmitter<ISearchResponseModel> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ISearchResponseModel> {
    return this.httpClient.get<ISearchResponseModel>(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=asa&type=video&key=AIzaSyDScfvdjvv1vroD1h4-wCtbtB9PH1ILCaI'
    );
  }

  showResults(data: ISearchResponseModel): void {
    this.clickSearchEvent.emit(data);
  }
}

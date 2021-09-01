import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockVideoData } from 'src/assets/data/mockData';
import { ISearchResponseModel } from '../models/search-response.model';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ISearchItemModel } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  clickSearchEvent: EventEmitter<ISearchResponseModel> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getData(searchWord: string): Observable<ISearchResponseModel> {
    return this.httpClient.get<ISearchResponseModel>(`search?part=snippet&maxResults=20&q=${searchWord}&type=video`).pipe(
      switchMap((videos: ISearchResponseModel) => {
        const ids = videos.items.map((item: ISearchItemModel) => item.id.videoId).join(',');
        return this.getVideo(ids);
      })
    );
  }

  getVideo(id: string | null): Observable<ISearchResponseModel> {
    return this.httpClient.get<ISearchResponseModel>(`videos?part=snippet,statistics&id=${id}`);
  }

  showResults(data: ISearchResponseModel): void {
    this.clickSearchEvent.emit(data);
  }
}

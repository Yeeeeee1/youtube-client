import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchResponseModel } from '../models/search-response.model';
import { switchMap } from 'rxjs/operators';
import { ISearchItemModel } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
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
}

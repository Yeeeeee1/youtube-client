import { createSelector } from '@ngrx/store';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { AppState } from '../app.state';

export const youtubeSelector: any = createSelector(
  (state: AppState) => state.videoData,
  (videoData: ISearchResponseModel) => videoData
);

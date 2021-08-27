import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
// import { AppState } from '../app.state';

export interface YoutubeVideosState {
  videoData: ISearchItemModel[],
}

export const selectState = createFeatureSelector<YoutubeVideosState>('videoData');

export const youtubeSelector = createSelector(
  selectState,
  (state: YoutubeVideosState) => state.videoData,
);

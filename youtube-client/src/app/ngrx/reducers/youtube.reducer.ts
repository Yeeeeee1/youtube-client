import { createReducer, on } from '@ngrx/store';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { mockVideoData } from 'src/assets/data/mockData';
import { addVideoData } from '../actions/youtube.action';

export const initialState: { videoData: ISearchItemModel[] } = { videoData: mockVideoData.items };

export const youtubeReducer = createReducer(
  initialState,
  on(addVideoData, (state, { videoData }) => {
    return { ...state, videoData: [...videoData] };
  })
);

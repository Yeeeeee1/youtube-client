import { createReducer, on } from '@ngrx/store';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { mockVideoData } from 'src/assets/data/mockData';
import { addVideoData } from '../actions/youtube.action';

export const initialState: Readonly<ISearchResponseModel> = mockVideoData;

const _youtubeReducer = createReducer(
  initialState,
  on(addVideoData, (state, { videoData }) => {
    console.log(videoData);
    return videoData;
  })
);

export function youtubeReducer(state: any, action: any) {
  return _youtubeReducer(state, action);
}

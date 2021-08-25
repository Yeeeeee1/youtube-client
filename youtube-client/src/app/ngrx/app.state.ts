import { ISearchResponseModel } from '../youtube/models/search-response.model';

export interface AppState {
  videoData: Readonly<ISearchResponseModel>;
}

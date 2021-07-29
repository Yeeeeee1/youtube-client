import { ISearchItemModel } from './search-item.model';

export interface ISearchResponseModel {
  kind: string;
  etag: string;
  pageInfo: IPageInfoModel;
  items: ISearchItemModel[];
}

interface IPageInfoModel {
  totalResults: number;
  resultsPerPage: number;
}

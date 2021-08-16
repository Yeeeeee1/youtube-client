export interface ISearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippetModel;
  statistics: IStatisticsModel;
}

export interface ISnippetModel {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnailsModel;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalizedModel;
  defaultAudioLanguage: string;
}

interface ILocalizedModel {
  title: string;
  description: string;
}

interface IThumbnailsModel {
  default: ISizeModel;
  medium: ISizeModel;
  high: ISizeModel;
  standard: ISizeModel;
  maxres: ISizeModel;
}

interface ISizeModel {
  url: string;
  width: number;
  height: number;
}

export interface IStatisticsModel {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

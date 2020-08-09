export interface IResult {
  kind: string;
  etag: string;
  pageInfo: { [key: string]: number };
  items: ISearchItems[];
}

export interface ISearchItems {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: { [key: string]: string };
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbailsItem;
    medium: IThumbailsItem;
    high: IThumbailsItem;
    standard: IThumbailsItem;
    maxres: IThumbailsItem;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IThumbailsItem {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}

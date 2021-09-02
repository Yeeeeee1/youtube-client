import { createReducer, on } from '@ngrx/store';
import { ICardModel } from 'src/app/shared/models/CardModel';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { mockVideoData } from 'src/assets/data/mockData';
import { addCard } from '../actions/card.action';
import { addVideoData } from '../actions/youtube.action';

export const initialState: { cardData: ICardModel[] } = {
  cardData: [{ title: '', description: '', urlToImage: '', urlToVideo: '', date: 0 }],
};

export const cardReducer = createReducer(
  initialState,
  on(addCard, (state, { cardData }) => {
    return { cardData: [...state.cardData, ...cardData] };
  })
);

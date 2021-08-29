import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICardModel } from 'src/app/shared/models/CardModel';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';

export interface CardState {
  cardData: ICardModel[];
}

export const selectState = createFeatureSelector<CardState>('cardData');

export const cardSelector = createSelector(selectState, (state: CardState) => state.cardData);

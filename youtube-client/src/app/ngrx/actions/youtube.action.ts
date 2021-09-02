import { createAction, props } from '@ngrx/store';
import { ICardModel } from 'src/app/shared/models/CardModel';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { actionTypes } from '../enums/actionsTypes';

export const addVideoData = createAction(actionTypes.addVideoData, props<{ videoData: ISearchItemModel[] }>());

import { createAction, props } from '@ngrx/store';
import { ISearchItemModel } from 'src/app/youtube/models/search-item.model';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { actionTypes } from '../enums/actionsTypes';

export const addVideoData = createAction(actionTypes.addVideoData, props<{ videoData: ISearchItemModel[] }>());

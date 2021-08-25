import { createAction, props } from '@ngrx/store';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { actionTypes } from '../enums/actionsTypes';

export const addVideoData = createAction(actionTypes.addVideoData, props<{ videoData: ISearchResponseModel }>());

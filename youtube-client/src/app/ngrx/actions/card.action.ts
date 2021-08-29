import { createAction, props } from '@ngrx/store';
import { ICardModel } from 'src/app/shared/models/CardModel';
import { actionTypes } from '../enums/actionsTypes';

export const addCard = createAction(actionTypes.addCard, props<{ cardData: ICardModel[] }>());

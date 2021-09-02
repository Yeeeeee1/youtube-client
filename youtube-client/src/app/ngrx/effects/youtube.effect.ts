import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { actionTypes } from '../enums/actionsTypes';

@Injectable()
export class YoutubeEffects {
  addVideoData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.addVideoData),
      mergeMap(() =>
        this.youtubeService.getData('asa').pipe(
          map((movies) => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private youtubeService: YoutubeService) {}
}

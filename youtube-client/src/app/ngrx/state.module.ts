import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeEffects } from './effects/youtube.effect';

@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forRoot([YoutubeEffects])],
})
export class StateModule {}

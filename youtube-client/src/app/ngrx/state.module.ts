import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './effects/youtube.effect';

@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forRoot([MovieEffects])],
})
export class StateModule {}

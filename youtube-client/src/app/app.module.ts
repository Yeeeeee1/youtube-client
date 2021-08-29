import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeService } from './youtube/services/youtube.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { InterceptorService } from './youtube/services/interceptor.service';
import { StoreModule } from '@ngrx/store';
import { youtubeReducer } from './ngrx/reducers/youtube.reducer';
import { AppState } from './ngrx/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, CoreModule, SharedModule, HttpClientModule, StoreModule.forRoot(AppState)],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}

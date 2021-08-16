import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './core/components/header/header-component/header-component.component';
import { SettingsComponentComponent } from './core/components/header/settings-component/settings-component.component';
import { FooterComponentComponent } from './core/components/footer/footer-component/footer-component.component';
import { SearchResultsComponent } from './youtube/components/search/search-results/search-results.component';
import { HighlightBottomDirective } from './youtube/directives/highlight-bottom.directive';
import { OrderByPipe } from './youtube/pipes/order-by.pipe';
import { SortByWordPipe } from './youtube/pipes/sort-by-word.pipe';
import { SharedModule } from './shared/shared/shared.module';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, AuthModule, CoreModule, SharedModule, YoutubeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

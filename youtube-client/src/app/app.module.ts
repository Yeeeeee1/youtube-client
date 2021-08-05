import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { SettingsComponentComponent } from './header/settings-component/settings-component.component';
import { FooterComponentComponent } from './footer/footer-component/footer-component.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HighlightBottomDirective } from './search/search-results/directives/highlight-bottom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SettingsComponentComponent,
    FooterComponentComponent,
    SearchResultsComponent,
    HighlightBottomDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

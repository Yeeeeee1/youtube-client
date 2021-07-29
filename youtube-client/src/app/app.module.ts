import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { SettingsComponentComponent } from './header/settings-component/settings-component.component';
import { FooterComponentComponent } from './footer/footer-component/footer-component.component';
import { SearchItemComponent } from './search/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SettingsComponentComponent,
    FooterComponentComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

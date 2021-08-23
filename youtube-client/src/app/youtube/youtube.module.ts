import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { HighlightBottomDirective } from './directives/highlight-bottom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SortByWordPipe } from './pipes/sort-by-word.pipe';
import { RouterModule } from '@angular/router';
import { DetailedInfoCardComponent } from './components/detailed-info-card/detailed-info-card.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [SearchResultsComponent, HighlightBottomDirective, OrderByPipe, SortByWordPipe, DetailedInfoCardComponent],
  imports: [
    RouterModule.forChild([
      { path: 'main', component: SearchResultsComponent },
      { path: 'main/:id', component: DetailedInfoCardComponent },
    ]),
    CommonModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  exports: [SearchResultsComponent],
})
export class YoutubeModule {}

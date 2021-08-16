import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { HighlightBottomDirective } from './directives/highlight-bottom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SortByWordPipe } from './pipes/sort-by-word.pipe';
import { RouterModule } from '@angular/router';
import { DetailedInfoCardComponent } from './components/detailed-info-card/detailed-info-card.component';

@NgModule({
  declarations: [SearchResultsComponent, HighlightBottomDirective, OrderByPipe, SortByWordPipe, DetailedInfoCardComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: SearchResultsComponent },
      { path: ':id', component: DetailedInfoCardComponent },
    ]),
    CommonModule,
  ],
  exports: [SearchResultsComponent],
})
export class YoutubeModule {}

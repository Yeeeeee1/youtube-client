import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { HighlightBottomDirective } from './directives/highlight-bottom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SortByWordPipe } from './pipes/sort-by-word.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchResultsComponent, HighlightBottomDirective, OrderByPipe, SortByWordPipe],
  imports: [RouterModule.forChild([{ path: '', component: SearchResultsComponent }]), CommonModule],
  exports: [SearchResultsComponent],
})
export class YoutubeModule {}

import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemModel } from '../models/search-item.model';

@Pipe({
  name: 'sortByWord',
})
export class SortByWordPipe implements PipeTransform {
  transform(videoData: ISearchItemModel[], word: string): ISearchItemModel[] {
    return videoData.sort((value: ISearchItemModel) => (value.snippet.title.includes(word) ? -1 : 1));
  }
}

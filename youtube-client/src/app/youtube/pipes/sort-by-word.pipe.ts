import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemModel } from '../models/search-item.model';

@Pipe({
  name: 'sortByWord',
})
export class SortByWordPipe implements PipeTransform {
  transform(videoData: ISearchItemModel[], word: string): ISearchItemModel[] {
    return videoData.filter((value: ISearchItemModel) => value.snippet.title.toLowerCase().includes(word.toLowerCase()));
  }
}

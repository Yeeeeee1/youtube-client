import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemModel } from '../../models/search-item.model';

@Pipe({
  name: 'sortByWord',
})
export class SortByWordPipe implements PipeTransform {
  transform(mockData: ISearchItemModel[], word: string): ISearchItemModel[] {
    return mockData.filter((value: ISearchItemModel) => value.snippet.title.includes(word));
  }
}

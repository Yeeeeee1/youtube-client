import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemModel, ISnippetModel, IStatisticsModel } from '../../models/search-item.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: ISearchItemModel[], term: string, flag: boolean = false): ISearchItemModel[] {
    function compare(a: any, b: any): number {
      if (term === 'viewCount') {
        a[term] = Number(a[term]);
        b[term] = Number(b[term]);
      }

      if (a[term] > b[term]) {
        return flag ? -1 : 1;
      }
      if (a[term] < b[term]) {
        return flag ? 1 : -1;
      }

      return 0;
    }
    if (term === 'publishedAt') {
      return value.sort((a: ISearchItemModel, b: ISearchItemModel) => compare(a.snippet, b.snippet));
    }
    if (term === 'viewCount') {
      return value.sort((a: ISearchItemModel, b: ISearchItemModel) => compare(a.statistics, b.statistics));
    }
    return value;
  }
}

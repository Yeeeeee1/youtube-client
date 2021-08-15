import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemModel } from '../../models/search-item.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: ISearchItemModel[], term: string, mode: number = -1): ISearchItemModel[] {
    function compare(a: string, b: string): number {
      let compared1 = 0;
      let compared2 = 0;
      if (term === 'publishedAt') {
        compared1 = new Date(a).getTime();
        compared2 = new Date(b).getTime();
      }

      if (term === 'viewCount') {
        compared1 = Number(a);
        compared2 = Number(b);
      }

      return (compared1 - compared2) * mode;
    }
    if (term === 'publishedAt') {
      return value.sort((a: ISearchItemModel, b: ISearchItemModel) => compare(a.snippet[term], b.snippet[term]));
    }
    if (term === 'viewCount') {
      return value.sort((a: ISearchItemModel, b: ISearchItemModel) => compare(a.statistics[term], b.statistics[term]));
    }
    return value;
  }
}

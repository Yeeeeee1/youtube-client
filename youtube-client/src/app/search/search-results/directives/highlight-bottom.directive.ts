import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightBottom]',
})
export class HighlightBottomDirective {
  @Input() set appHighlightBottom(publishedAt: string) {
    let color = '';
    if (publishedAt) {
      const MSEC_ONE_DAY = 86400000;
      const ONE_MONTH_DAYS = 30;
      const ONE_WEEK_DAYS = 7;
      const HALF_YEAR_DAYS = 180;
      const publishDate: number = new Date(publishedAt).getTime();
      const nowDate: number = new Date().getTime();
      const diff = Math.round((nowDate - publishDate) / MSEC_ONE_DAY);
      if (diff < ONE_MONTH_DAYS) {
        color = 'green';
      }
      if (publishDate < ONE_WEEK_DAYS) {
        color = 'blue';
      }
      if (publishDate > HALF_YEAR_DAYS) {
        color = 'red';
      }
    }
    this.el.nativeElement.style.borderBottom = `5px solid ${color}`;
  }

  constructor(private el: ElementRef<HTMLDivElement>) {}
}

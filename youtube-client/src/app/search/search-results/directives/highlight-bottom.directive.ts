import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightBottom]',
})
export class HighlightBottomDirective {
  @Input() set appHighlightBottom(publishedAt: string) {
    let color = '';
    if (publishedAt) {
      const publishDate: number = new Date(publishedAt).getTime();
      const nowDate: number = new Date().getTime();
      const diff = nowDate - publishDate;
      if (diff < 30) {
        color = 'green';
      }
      if (publishDate < 7) {
        color = 'blue';
      }
      if (publishDate > 180) {
        color = 'red';
      }
    }
    this.el.nativeElement.style.borderBottom = `5px solid ${color}`;
  }

  constructor(private el: ElementRef<HTMLDivElement>) {}
}

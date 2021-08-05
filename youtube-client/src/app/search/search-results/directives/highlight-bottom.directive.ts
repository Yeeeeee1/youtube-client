import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightBottom]',
})
export class HighlightBottomDirective {
  @Input() set appHighlightBottom(publishedAt: string) {
    let color;
    if (publishedAt) {
      let publishDate: any = new Date(publishedAt);
      let nowDate: any = new Date();
      let diff = nowDate - publishDate;
      if (diff < 30) {
        color = 'green';
      }
      if (publishDate < 7) {
        color = 'blue';
      }
      if (publishDate > 180) {
        color = 'red';
      }
      console.log(diff / 1000 / 60 / 60 / 24);
    }
    console.log(this.el);
    this.el.nativeElement.style.borderBottom = ' 5px solid ' + color;
  }

  constructor(private el: ElementRef) {}
}

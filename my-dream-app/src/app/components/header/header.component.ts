import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  bool: boolean;
  show: boolean;

  getApi(): void {
    if (
      (<HTMLInputElement>document.querySelector('.header__search-input'))
        .value != ''
    ) {
      this.share.doClick();
    } else {
      alert('Введите запрос!');
    }
  }

  showSettings(): void {
    this.share.showSetting();
  }

  constructor(private share: SharedService) {
    this.share.bool.subscribe((cnt) => (this.bool = cnt));
    this.share.show.subscribe((cnt) => (this.show = cnt));
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  bool: Boolean;
  searchTerm: string;
  onKey(value) {
    this.searchTerm = value;
    this.share.searchFilter(value);
  }
  constructor(private share: SearchService) {
    this.share.onClick.subscribe((cnt) => (this.bool = cnt));
    this.share.filter.subscribe((cnt) => (this.searchTerm = cnt));
  }

  ngOnInit(): void {}
}

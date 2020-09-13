import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  show: boolean;
  searchTerm: string;
  onKey(value) {
    this.searchTerm = value;
    this.share.searchFilter(value);
  }

  constructor(private share: SharedService) {
    this.share.show.subscribe((cnt) => (this.show = cnt));
    this.share.filter.subscribe((cnt) => (this.searchTerm = cnt));
  }

  ngOnInit(): void {}
}

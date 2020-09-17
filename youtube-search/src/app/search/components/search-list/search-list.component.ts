// search-list.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../shared/models/search.interface';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  @Input() videos: Video[];
  searchTerm: string;

  constructor(private share: SearchService) {
    this.share.filter.subscribe((cnt) => (this.searchTerm = cnt));
  }

  ngOnInit() {}
}

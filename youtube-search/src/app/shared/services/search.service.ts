// search.service.ts

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private bool: Boolean = false;
  onClick: EventEmitter<Boolean> = new EventEmitter();
  searchTerm: string;
  filter: EventEmitter<string> = new EventEmitter();

  public doClick() {
    this.bool = !this.bool;
    this.onClick.emit(this.bool);
  }

  public searchFilter(value) {
    this.searchTerm = value;
    this.filter.emit(this.searchTerm);
  }

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyCB7pLzKTc2P_5BRWuKT4GbNuAfAtKiHdk';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}

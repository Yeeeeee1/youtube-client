import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { addVideoData } from 'src/app/ngrx/actions/youtube.action';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { YoutubeModule } from 'src/app/youtube/youtube.module';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent implements OnInit {
  isSettingsOpen = false;
  isShowResult = false;
  isLogin = false;
  searchWord = '';
  login: string | null = '';

  constructor(private youtubeService: YoutubeService, private authService: AuthService, private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.authService.authEvent.subscribe(() => {
      this.login = localStorage.getItem('login');
      this.isLogin = true;
    });
    this.login = localStorage.getItem('login');
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }
  }

  openSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  showResults(): void {
    if (this.searchWord.length >= 3) {
      this.youtubeService.getData(this.searchWord).subscribe((videoData: ISearchResponseModel) => {
        this.store.dispatch(addVideoData({ videoData: videoData.items }));
        this.youtubeService.showResults(videoData);
      });
    }
  }

  exitUser(): void {
    this.login = '';
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    this.isLogin = false;
    this.router.navigate(['auth']);
  }
}

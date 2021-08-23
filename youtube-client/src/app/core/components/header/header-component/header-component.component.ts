import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
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

  constructor(private youtubeService: YoutubeService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authEvent.subscribe(() => (this.isLogin = true));
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }
  }

  openSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  showResults(): void {
    this.youtubeService.getData().subscribe((data) => this.youtubeService.showResults(data));
  }

  exitUser(): void {
    localStorage.removeItem('token');
    this.isLogin = false;
    this.router.navigate(['auth']);
  }
}

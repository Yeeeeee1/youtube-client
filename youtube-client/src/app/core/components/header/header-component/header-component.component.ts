import { Component, EventEmitter, Output } from '@angular/core';
import { ISearchResponseModel } from 'src/app/youtube/models/search-response.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { YoutubeModule } from 'src/app/youtube/youtube.module';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent {
  @Output() clickSettingsBtnEvent = new EventEmitter<boolean>();
  isSettingsOpen = false;
  isShowResult = false;

  constructor(private youtubeService: YoutubeService) {}

  openSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
    this.clickSettingsBtnEvent.emit(this.isSettingsOpen);
  }

  showResults(): void {
    const videoData = this.youtubeService.getData();
    this.youtubeService.showResults(videoData);
  }
}

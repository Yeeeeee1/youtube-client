import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent {
  @Output() clickSettingsBtnEvent = new EventEmitter<boolean>();
  @Output() clickSearchBtnEvent = new EventEmitter<boolean>();
  isSettingsOpen = false;
  isShowResult = false;

  openSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
    this.clickSettingsBtnEvent.emit(this.isSettingsOpen);
  }

  showResults(): void {
    this.isShowResult = true;
    this.clickSearchBtnEvent.emit(this.isShowResult);
  }
}

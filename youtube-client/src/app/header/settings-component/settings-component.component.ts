import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.scss'],
})
export class SettingsComponentComponent {
  @Input() isSettingsOpen = false;
}

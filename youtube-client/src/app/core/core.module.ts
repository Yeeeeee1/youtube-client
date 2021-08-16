import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer/footer-component/footer-component.component';
import { SettingsComponentComponent } from './components/header/settings-component/settings-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponentComponent, FooterComponentComponent, SettingsComponentComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  exports: [HeaderComponentComponent, FooterComponentComponent, SettingsComponentComponent],
})
export class CoreModule {}

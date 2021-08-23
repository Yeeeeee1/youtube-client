import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer/footer-component/footer-component.component';
import { SettingsComponentComponent } from './components/header/settings-component/settings-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponentComponent, FooterComponentComponent, SettingsComponentComponent, NotFoundComponent],
  imports: [CommonModule, FormsModule, BrowserModule, RouterModule],
  exports: [HeaderComponentComponent, FooterComponentComponent, SettingsComponentComponent],
})
export class CoreModule {}

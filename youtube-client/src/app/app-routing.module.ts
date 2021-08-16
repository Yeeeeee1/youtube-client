import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DetailedInfoCardComponent } from './youtube/components/detailed-info-card/detailed-info-card.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  { path: ':id', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

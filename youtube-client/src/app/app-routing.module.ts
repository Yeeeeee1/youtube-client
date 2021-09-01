import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DetailedInfoCardComponent } from './youtube/components/detailed-info-card/detailed-info-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },

  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

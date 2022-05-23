import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AuthComponent],
  imports: [AuthRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AuthComponent],
  providers: [],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [AdminRoutingModule, CommonModule, FormsModule],
  exports: [AdminComponent],
})
export class AdminModule {}

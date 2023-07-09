import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '@module/material';
import { SharedModule } from '@module/shared';
import * as fromComponents from './components';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [fromComponents.components, SideBarComponent],
  imports: [CommonModule, MaterialModule, SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}

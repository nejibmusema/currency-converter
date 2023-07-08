import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '@module/material';
import { SharedModule } from '@module/shared';
import * as fromComponents from './components';

@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, MaterialModule, SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}

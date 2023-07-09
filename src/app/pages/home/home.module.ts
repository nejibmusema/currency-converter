import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { SharedModule } from '@module/shared';
import { HomeRoutingModule } from 'src/app/pages/home/home-routing.module';

@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}

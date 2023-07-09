import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

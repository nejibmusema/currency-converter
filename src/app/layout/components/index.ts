import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from 'src/app/layout/components/side-bar/side-bar.component';
export const components: any[] = [
  MainComponent,
  HeaderComponent,
  SideBarComponent,
];
export * from './main/main.component';
export * from './header/header.component';
export * from 'src/app/layout/components/side-bar/side-bar.component';

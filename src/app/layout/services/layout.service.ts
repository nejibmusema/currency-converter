import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  sideBarOpened = false;
  isSideBar = false;

  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public layoutService: LayoutService) {}
}

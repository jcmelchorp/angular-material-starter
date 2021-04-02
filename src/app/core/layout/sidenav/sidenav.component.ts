import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('leftSidenav') sidenavLeft: MatSidenav;
  @Input() isHandset: boolean;
  constructor(
    private layoutService: LayoutService,
  ) {
    this.layoutService.toggleSidenavLeft.subscribe(() => {
      this.sidenavLeft.toggle();
    });
  }
  ngOnInit() { }
}

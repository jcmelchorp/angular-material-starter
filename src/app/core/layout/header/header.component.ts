import { Component, Input, OnInit } from '@angular/core';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { LayoutService } from '../../services/layout.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isHandset: boolean;
  isDarkTheme: Observable<boolean>;
  isDark: boolean;
  faGlobe = faGlobe;
  faLightbulb = faLightbulb;
  faMoon = faMoon;
  faSun = faSun;
  constructor(
    private layoutService: LayoutService,
    private themeService: ThemeService
  ) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  toggleDarkTheme(checked: boolean) {
    this.isDark = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDark);
  }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
}

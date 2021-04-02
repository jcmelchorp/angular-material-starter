import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { TranslateService } from '@ngx-translate/core';

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
    public translate: TranslateService,
    private layoutService: LayoutService,
    private themeService: ThemeService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.isDarkTheme = this.themeService.isDarkTheme;
    iconRegistry.addSvgIcon(
      'en',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/en.svg')
    );
    iconRegistry.addSvgIcon(
      'es',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/es.svg')
    );
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  toggleDarkTheme(checked: boolean) {
    this.isDark = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDark);
  }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
}

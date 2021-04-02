import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { LayoutService } from '../services/layout.service';
import { ThemeService } from '../services/theme.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  toggleSidenavLeft: EventEmitter<any> = new EventEmitter();
  isDarkTheme: Observable<boolean>;
  isHandset$: Observable<boolean>;
  loading = false;
  /*  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
     .pipe(
       map(result => result.matches),
       shareReplay()
     ); */
  constructor(
    public translate: TranslateService,
    private themeService: ThemeService,
    private layoutService: LayoutService,
    private router: Router
  ) {
    translate.addLangs(['es', 'en']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isHandset$ = this.layoutService.isHandset$;
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    switch (true) {
      case event instanceof NavigationStart: {
        this.loading = true;
        break;
      }
      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError: {
        this.loading = false;
        break;
      }
      default: {
        break;
      }
    }
  }
}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

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
    private themeService: ThemeService,
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isHandset$ = this.layoutService.isHandset$;
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

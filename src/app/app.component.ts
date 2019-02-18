import browser from 'browser-detect';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated
} from '@app/core';
import { environment as env } from '@env/environment';

import {
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
} from './settings';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];

  navigation = [
    { subIndex: 0, link: false, label: 'menu.main', hasSub: true, sub: false, open: false },
    { subIndex: 0, link: 'area', label: 'menu.area', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'employe', label: 'menu.employe', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'equipment', label: 'menu.equipment', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'group-zone', label: 'menu.group_zone', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'location', label: 'menu.location', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'lode', label: 'menu.lode', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'minefields', label: 'menu.minefields', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'section', label: 'menu.section', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'type-zone', label: 'menu.type_zone', hasSub: false, sub: true, open: false },
    { subIndex: 0, link: 'vid-zone', label: 'menu.vid_zone', hasSub: false, sub: true, open: false },

    // { link: 'about', label: 'anms.menu.about' },
    // { link: 'features', label: 'anms.menu.features' },
    // { link: 'examples', label: 'anms.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation
    // { link: 'settings', label: 'anms.menu.settings' }
  ];

  menuEvent(item) {
    !item.hasSub ? this.sidenav.close() : null
    if (item.hasSub) {
      for (const key in this.navigation) {
        if (item.subIndex === this.navigation[key].subIndex) {
          this.navigation[key].open = !this.navigation[key].open
        }
      }
    }
  }

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService
  ) { }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }
}

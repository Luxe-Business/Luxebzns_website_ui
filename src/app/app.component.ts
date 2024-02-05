import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { Platform } from '@angular/cdk/platform';
import * as AOS from 'aos';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'luxe-bzns',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'luxe-bzns-ui';
  
  isOnline: boolean;
  modalVersion: boolean;
  modalPwaEvent: any;
  modalPwaPlatform: string|undefined;

  constructor(private platform: Platform,
              private swUpdate: SwUpdate,@Inject(PLATFORM_ID) private platformId: Object,private router: Router,private languageService: LanguageService,@Inject(DOCUMENT) private document: Document) {
    this.isOnline = false;
    this.modalVersion = false;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.enableBodyScroll();
      this.smoothScrollToTop();
    });
  }

  private enableBodyScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = '';
      this.document.body.style.paddingRight = '';
    }
  }
  
  private smoothScrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }


  public ngOnInit(): void {
    if (typeof window !== 'undefined'){
      const localStorage = document.defaultView?.localStorage;
      if (localStorage) {
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
        this.languageService.changeLanguage(preferredLanguage); 
      } 
    }
    this.updateOnlineStatus();
    if (typeof window !== 'undefined'){
      window.addEventListener('online',  this.updateOnlineStatus.bind(this));
      window.addEventListener('offline', this.updateOnlineStatus.bind(this));
    }

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.pipe(
        filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map((evt: any) => {
          console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
          this.modalVersion = true;
        }),
      );
    }

    this.loadModalPwa();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Reload the app.js script here
        this.reloadAppScript();
      }
    });
  }

  reloadAppScript(): void {
    // Ensure this runs only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const scriptId = 'app-js-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;

      if (script) {
        document.head.removeChild(script);
      }

      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'assets/js/app.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }
  


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      setTimeout(() => {
        AOS.refresh();
      }, 1000);
    }
  }
  

  private updateOnlineStatus(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isOnline = window.navigator.onLine;
    }
  }

  public updateVersion(): void {
    this.modalVersion = false;
    window.location.reload();
  }

  public closeVersion(): void {
    this.modalVersion = false;
  }

  private loadModalPwa(): void {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.modalPwaEvent = event;
        this.modalPwaPlatform = 'ANDROID';
      });
    }

    if (this.platform.IOS && this.platform.SAFARI) {
      const isInStandaloneMode = ('standalone' in window.navigator) && ((<any>window.navigator)['standalone']);
      if (!isInStandaloneMode) {
        this.modalPwaPlatform = 'IOS';
      }
    }
  }

  public addToHomeScreen(): void {
    this.modalPwaEvent.prompt();
    this.modalPwaPlatform = undefined;
  }

  public closePwa(): void {
    this.modalPwaPlatform = undefined;
  }
}

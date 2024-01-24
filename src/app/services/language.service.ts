import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private language = new BehaviorSubject<string>('en');
  currentLanguage = this.language.asObservable();

  constructor(
    private translate: TranslateService,
    private location: Location
  ) {}

  getCurrentLang(): string {
    return this.language.value;
  }

  changeLanguage(language: string): void {
    this.language.next(language);
    this.translate.use(language);
    localStorage.setItem('preferredLanguage', language);
    this.updateHtmlLangAndDir(language);
    this.updateUrl(language);
  }

  private updateUrl(language: string): void {
    let currentUrl = this.location.path();
    if (!currentUrl.startsWith('/')) {
      currentUrl = '/' + currentUrl;
    }
  
    const languagePrefix = language === 'ar' ? '/ar-AE' : '/en-US';
    const newUrl = currentUrl.replace(/^\/(en-US|ar-AE)/, languagePrefix);
  
    if (newUrl !== currentUrl) {
      this.location.go(newUrl);
      window.location.reload();
    }
  }
  

  private updateHtmlLangAndDir(language: string): void {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('lang', language === 'ar' ? 'ar' : 'en');
    htmlTag.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }
}

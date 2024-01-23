import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ar-AE', label: 'العربية' },
  ];

  constructor(private location: Location) {}

  changeLanguage(languageCode: string) {
    const currentUrl = this.location.path();
    const newUrl = currentUrl.replace(/^\/(en-US|ar-AE)/, `/${languageCode}`);
    this.location.go(newUrl);
    window.location.reload();
  }
}

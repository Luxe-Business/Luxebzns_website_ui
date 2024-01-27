import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public languageService: LanguageService) {}
  
  toggleLanguage(): void {
    const newLang = this.languageService.getCurrentLang() === 'en' ? 'ar' : 'en';
    this.languageService.changeLanguage(newLang);
  }

}

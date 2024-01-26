import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLocalizedLink]',
  standalone: false
})
export class LocalizedLinkDirective implements OnInit {
  @Input('appLocalizedLink') path!: string;

  constructor(private el: ElementRef, private router: Router, private langService: LanguageService) {}

  ngOnInit() {
    this.langService.currentLanguage.subscribe(lang => {      
      const languagePrefix = lang === 'ar' ? '/ar-AE' : '/en-US';
      const newPath = `${languagePrefix}/${this.path}`;

      this.el.nativeElement.addEventListener('click', (event: Event) => {
        console.log('Link clicked');
        event.preventDefault();
        this.router.navigateByUrl(newPath);
      });
    });
  }
}

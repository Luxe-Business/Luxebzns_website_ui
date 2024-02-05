import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{

  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    this.updateMetadata();
  }

  updateMetadata() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the 404 page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the 404 page
      this.titleService.setTitle("404 Not Found - Luxe Bzns | Innovative IT and Software Solutions");
      this.metaTagService.updateTag({ name: 'description', content: 'Page not found. Luxe Bzns provides cutting-edge software and IT solutions. Explore our services or contact us for more information.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'website development Dubai, mobile apps development Dubai, tech consulting Dubai, CRM solutions Dubai, ERP solutions Dubai, custom software Dubai, AI chatbot Dubai, UI/UX design Dubai' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Page not found. Luxe Bzns provides cutting-edge software and IT solutions. Discover our innovative solutions on our website.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: '404 Page Not Found - Luxe Bzns' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: '404 Page Not Found - Luxe Bzns' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Page not found. Luxe Bzns is your destination for innovative software and IT solutions. Discover more on our website.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

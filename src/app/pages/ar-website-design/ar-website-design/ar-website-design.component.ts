import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ar-website-design',
  standalone: true,
  imports: [ComponentsModule,NgOptimizedImage,RouterLink,TranslateModule],
  templateUrl: './ar-website-design.component.html',
  styleUrl: './ar-website-design.component.scss'
})
export class ArabicWebDesignComponent implements OnInit{


  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    this.updateMetadata();
  }

  updateMetadata() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the "About Us" page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the "About Us" page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the "About Us" page
      this.titleService.setTitle("About Us - Codevay | Learn About Our Team and Mission");
      this.metaTagService.updateTag({ name: 'description', content: 'Discover the story behind Codevay. Learn about our team, mission, and values. Find out how we are dedicated to delivering innovative IT and software solutions.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'About Us, Codevay team, mission, values, innovative IT solutions, software solutions' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Discover the story behind Codevay. Learn about our team, mission, and values. Find out how we are dedicated to delivering innovative IT and software solutions.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'About Us - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'About Us - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Discover the story behind Codevay. Learn about our team, mission, and values. Find out how we are dedicated to delivering innovative IT and software solutions.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

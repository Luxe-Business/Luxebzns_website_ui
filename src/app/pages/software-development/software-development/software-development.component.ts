import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-software-development',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './software-development.component.html',
  styleUrl: './software-development.component.scss'
})
export class SoftwareDevelopmentComponent {

  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForSoftwareDevelopment();
  }

  updateMetadataForSoftwareDevelopment() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the software development page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the software development page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the software development page
      this.titleService.setTitle("Software Development Services - Luxe Bzns | Building Future Technology");
      this.metaTagService.updateTag({ name: 'description', content: 'Luxe Bzns specializes in custom software development services, offering cutting-edge solutions for mobile apps, web applications, and enterprise software. Transform your business with our technology.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'software development Dubai, custom software, mobile app development, web application development, enterprise software solutions, Luxe Bzns software development' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Luxe Bzns specializes in custom software development services, offering cutting-edge solutions to transform your business.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Software Development Services - Luxe Bzns' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Software Development Services - Luxe Bzns' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Luxe Bzns specializes in custom software development services, offering cutting-edge solutions to transform your business.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

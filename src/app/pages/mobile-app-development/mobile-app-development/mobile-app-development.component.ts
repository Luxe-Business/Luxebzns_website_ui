import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-app-development',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './mobile-app-development.component.html',
  styleUrl: './mobile-app-development.component.scss'
})
export class MobileAppDevelopmentComponent {


  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForMobileAppsDevelopment();
  }

  updateMetadataForMobileAppsDevelopment() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the mobile apps development page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the mobile apps development page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the mobile apps development page
      this.titleService.setTitle("Mobile Apps Development - Luxe Bzns | Innovating Mobile Experiences");
      this.metaTagService.updateTag({ name: 'description', content: 'Transform your business with Luxe Bzns\' mobile apps development services. We specialize in creating innovative, user-centric mobile applications tailored to your business needs.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'mobile apps development Dubai, iOS development, Android development, mobile app design, custom mobile apps, Luxe Bzns mobile apps' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Transform your business with Luxe Bzns\' mobile apps development services. Creating innovative, user-centric mobile applications tailored to your needs.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Mobile Apps Development - Luxe Bzns' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Mobile Apps Development - Luxe Bzns' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Transform your business with Luxe Bzns\' mobile apps development services. We specialize in creating innovative, user-centric mobile applications tailored to your business needs.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

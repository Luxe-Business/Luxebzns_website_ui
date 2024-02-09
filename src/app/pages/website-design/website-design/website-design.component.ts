import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-website-design',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './website-design.component.html',
  styleUrl: './website-design.component.scss'
})
export class WebsiteDesignComponent {

  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForWebsiteDesign();
  }

  updateMetadataForWebsiteDesign() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the website design page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the website design page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the website design page
      this.titleService.setTitle("Website Design Services - Luxe Bzns | Crafting Stunning Online Experiences");
      this.metaTagService.updateTag({ name: 'description', content: 'Elevate your online presence with Luxe Bzns\' website design services. From concept to creation, we craft stunning, user-friendly websites tailored to your brand’s needs.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'website design Dubai, web design, responsive web design, UI/UX design, website redesign, Luxe Bzns website design' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Elevate your online presence with Luxe Bzns\' website design services. Craft stunning, user-friendly websites tailored to your brand’s needs.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Website Design Services - Luxe Bzns' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Website Design Services - Luxe Bzns' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Elevate your online presence with Luxe Bzns\' website design services. From concept to creation, we craft stunning, user-friendly websites tailored to your brand’s needs.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

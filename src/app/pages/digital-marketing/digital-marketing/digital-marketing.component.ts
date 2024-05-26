import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.scss'
})
export class DigitalMarketingComponent {

  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForDigitalMarketing();
  }

  updateMetadataForDigitalMarketing() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the digital marketing page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the digital marketing page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
  
      // Update specific meta tags for the digital marketing page
      this.titleService.setTitle("Digital Marketing Services - Codevay | Empowering Your Online Presence");
      this.metaTagService.updateTag({ name: 'description', content: 'Boost your brand with Codevay\' Digital Marketing services including SEO, social media, email marketing, and more. Empower your online presence with our tailored strategies.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'digital marketing Dubai, SEO services, social media marketing, email marketing, content marketing, online advertising, Codevay digital marketing' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Boost your brand with Codevay\' Digital Marketing services. Empower your online presence with our tailored strategies.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Digital Marketing Services - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Digital Marketing Services - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Boost your brand with Codevay\' Digital Marketing services. Empower your online presence with our tailored strategies.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

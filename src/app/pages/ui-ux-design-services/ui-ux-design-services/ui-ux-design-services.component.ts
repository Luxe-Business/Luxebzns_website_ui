import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-ux-design-services',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './ui-ux-design-services.component.html',
  styleUrl: './ui-ux-design-services.component.scss'
})
export class UiUxDesignServicesComponent {


  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForUIUXDesign();
  }

  updateMetadataForUIUXDesign() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the UI/UX Design page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the UI/UX Design page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
      // Update specific meta tags for the UI/UX Design page
      this.titleService.setTitle("UI/UX Design Services - Codevay | Crafting Engaging Digital Experiences");
      this.metaTagService.updateTag({ name: 'description', content: 'Elevate your digital presence with Codevay\' UI/UX design services. Our team creates intuitive, engaging designs that enhance user satisfaction and drive success.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'UI/UX design Dubai, user interface design, user experience design, mobile app design, website design, Codevay UI/UX design' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Elevate your digital presence with Codevay\' UI/UX design services. Creating intuitive, engaging designs to enhance user satisfaction.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'UI/UX Design Services - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'UI/UX Design Services - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Elevate your digital presence with Codevay\' UI/UX design services. Our team creates intuitive, engaging designs that enhance user satisfaction and drive success.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

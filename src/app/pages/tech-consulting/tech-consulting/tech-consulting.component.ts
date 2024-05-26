import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tech-consulting',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './tech-consulting.component.html',
  styleUrl: './tech-consulting.component.scss'
})
export class TechConsultingComponent {


  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForTechConsulting();
  }

  updateMetadataForTechConsulting() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the tech consulting page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the tech consulting page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
  
      // Update specific meta tags for the tech consulting page
      this.titleService.setTitle("Tech Consulting Services - Codevay | Navigating Technology with Expertise");
      this.metaTagService.updateTag({ name: 'description', content: 'Unlock your business potential with Codevay\' tech consulting services. Our experts provide strategic insights to navigate technology challenges, optimize operations, and drive innovation.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'tech consulting Dubai, technology strategy, IT consulting, digital transformation, business technology solutions, Codevay consulting' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Unlock your business potential with Codevay\' tech consulting services. Providing strategic insights to navigate technology challenges and drive innovation.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Tech Consulting Services - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Tech Consulting Services - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Unlock your business potential with Codevay\' tech consulting services. Our experts provide strategic insights to navigate technology challenges and drive innovation.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    this.updateMetadata();
  }

  updateMetadata() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the testimonials page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the testimonials page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
  
      // Update specific meta tags for the testimonials page
      this.titleService.setTitle("Client Testimonials - Codevay | What Our Clients Say");
      this.metaTagService.updateTag({ name: 'description', content: 'Read what our clients have to say about Codevay. Explore client testimonials and discover how we have helped businesses achieve success through our services.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'client testimonials, Codevay reviews, client feedback, client success stories, Codevay client experiences' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Read what our clients have to say about Codevay. Explore client testimonials and discover how we\'ve helped businesses achieve success through our services.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Client Testimonials - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Client Testimonials - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Read what our clients have to say about Codevay. Explore client testimonials and discover how we\'ve helped businesses achieve success through our services.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }

  
}

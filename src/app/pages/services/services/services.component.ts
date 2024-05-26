import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

  constructor(private router: Router, private elRef: ElementRef,private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  goToService(service: string) {
    // Manually hide tooltips
    this.hideTooltips();

    // Navigate to the new route
    this.router.navigate([service]);
  }

  private hideTooltips() {
    const tooltips = this.elRef.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltipElement: HTMLElement) => {
      // Check if the tooltip instance exists
      const tooltipInstance = bootstrap.Tooltip.getInstance(tooltipElement);
      if (tooltipInstance) {
        tooltipInstance.hide();
      }
    });
  }

  ngOnInit() {
    this.updateMetadata();
  }

  
  updateMetadata() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the services page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the services page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
  
      // Update specific meta tags for the services page
      this.titleService.setTitle("Our Services - Codevay | Elevating Your Digital Experience");
      this.metaTagService.updateTag({ name: 'description', content: 'Explore Codevay\'s range of services, from web development to digital marketing, tailored to revolutionize your business. Elevate your digital experience with our expertise.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'web development, mobile app development, tech consulting, CRM solutions, ERP solutions, custom software, AI chatbot, UI/UX design, Codevay services' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Explore Codevay\'s range of services, tailored to revolutionize your business. Elevate your digital experience with our expertise.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Our Services - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Our Services - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Explore Codevay\'s range of services, tailored to revolutionize your business. Elevate your digital experience with our expertise.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

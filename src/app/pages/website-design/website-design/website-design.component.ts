import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
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
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForWebsiteDesign();
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

  addStructuredData() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    script.textContent = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Service",
      "serviceType": "Web Design",
      "provider": {
        "@type": "Organization",
        "name": "Codevay",
        "url": window.location.href,
        "logo": "assets/img/logo.svg",
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+971 562 455 466",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"]
        }]
      },
      "areaServed": "AE",
      "description": "Elevate your online presence with Codevay's website design services. From concept to creation, we craft stunning, user-friendly websites tailored to your brand’s needs.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "6120"
      },
      "sameAs": [
        "https://www.facebook.com/codevayweb/",
        "https://www.instagram.com/codevay_web/",
        "https://www.linkedin.com/company/codevay/"
      ]
    });
    this.renderer.appendChild(this.el.nativeElement, script);
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
      this.titleService.setTitle("Website Design Services - Codevay | Crafting Stunning Online Experiences");
      this.metaTagService.updateTag({ name: 'description', content: 'Elevate your online presence with Codevay\' website design services. From concept to creation, we craft stunning, user-friendly websites tailored to your brand’s needs.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'website design Dubai, web design, responsive web design, UI/UX design, website redesign, Codevay website design' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Elevate your online presence with Codevay\' website design services. Craft stunning, user-friendly websites tailored to your brand’s needs.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Website Design Services - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Website Design Services - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Elevate your online presence with Codevay\' website design services. From concept to creation, we craft stunning, user-friendly websites tailored to your brand’s needs.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

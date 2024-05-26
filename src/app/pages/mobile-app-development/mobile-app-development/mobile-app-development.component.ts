import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
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
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForMobileAppsDevelopment();
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

  addStructuredData() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Mobile Apps Development Services - Codevay",
      "serviceType": "Mobile App Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Codevay",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Masraf Building - Baniyas Rd - Deira - Al Rigga",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "83163",
          "addressCountry": "AE"
        },
        "telephone": "+971 562 455 466",
        "url": "https://www.codevay.com/mobile-app-development",
        "logo": "https://www.codevay.com/assets/img/luxe-bzns-logo.png",
        "sameAs": [
          "https://www.facebook.com/codevayweb/",
          "https://www.instagram.com/codevay_company",
          "https://www.linkedin.com/company/codevay/"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Masraf Building - Baniyas Rd - Deira - Al Rigga",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "83163",
        "addressCountry": "AE"
      },
      "description": "Transform your business with Codevay's mobile apps development services. We specialize in creating innovative, user-centric mobile applications tailored to your business needs.",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"],
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "Service",
          "name": "Mobile Apps Development Services"
        },
        "ratingValue": "5.0",
        "reviewCount": "6150"
      },
      "image": "https://www.codevay.com/assets/img/luxe-bzns-logo.png"
    });
    this.renderer.appendChild(this.el.nativeElement, script);
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
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
  
      // Update specific meta tags for the mobile apps development page
      this.titleService.setTitle("Mobile Apps Development - Codevay | Innovating Mobile Experiences");
      this.metaTagService.updateTag({ name: 'description', content: 'Transform your business with Codevay\' mobile apps development services. We specialize in creating innovative, user-centric mobile applications tailored to your business needs.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'mobile apps development Dubai, iOS development, Android development, mobile app design, custom mobile apps, Codevay mobile apps' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Transform your business with Codevay\' mobile apps development services. Creating innovative, user-centric mobile applications tailored to your needs.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Mobile Apps Development - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Mobile Apps Development - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Transform your business with Codevay\' mobile apps development services. We specialize in creating innovative, user-centric mobile applications tailored to your business needs.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

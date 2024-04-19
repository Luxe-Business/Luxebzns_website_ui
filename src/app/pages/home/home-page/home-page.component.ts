import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ComponentsModule,TranslateModule,NgOptimizedImage,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{


  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    private el: ElementRef,
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
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Codevay",
      "url": window.location.href,
      "logo": "https://www.codevay.com/assets/img/luxe-bzns-logo.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+971 562 455 466",
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      }],
      "sameAs": [
        "https://www.facebook.com/codevayweb/",
        "https://www.instagram.com/codevay_web/",
        "https://www.linkedin.com/company/codevay/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "6389"
      }
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
      }
  
      // Update specific meta tags for the mobile apps development page
      this.titleService.setTitle("Codevay - Premier Software & IT Solutions in Dubai");
      this.metaTagService.updateTag({ name: 'description', content: 'Explore top-notch IT solutions tailored for your business needs in Dubai. Specializing in mobile apps, web development, and system integration.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'IT solutions Dubai, mobile apps development, web development services, system integration Dubai' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Codevay offers cutting-edge Website Development, Mobile Apps Development, Tech Consulting, CRM & ERP Solutions, Custom Software, AI Chatbots, and UI/UX Design services tailored for Dubai market.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Codevay - Premier Software & IT Solutions in Dubai' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Codevay - Premier Software & IT Solutions in Dubai' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Codevay offers cutting-edge Website Development, Mobile Apps Development, Tech Consulting, CRM & ERP Solutions, Custom Software, AI Chatbots, and UI/UX Design services tailored for Dubai market.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
}

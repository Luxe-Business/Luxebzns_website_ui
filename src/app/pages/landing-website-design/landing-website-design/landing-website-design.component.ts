import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';
import { DOCUMENT, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-website-design',
  standalone: true,
  imports: [ComponentsModule,NgOptimizedImage,RouterLink,TranslateModule],
  templateUrl: './landing-website-design.component.html',
  styleUrl: './landing-website-design.component.scss'
})
export class LandingWebDesignComponent implements OnInit{

  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForWebsiteDesign();
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

  goToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  addStructuredData() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "serviceType": "Web Design",
      "name": "Codevay تصميم مواقع الكترونية",
      "description": "تصميم مواقع الكترونية احترافية في دبي. تقدم Codevay خدمات تصميم مواقع ويب تركز على الابتكار، التصاميم الجذابة والمتجاوبة التي تعزز تفاعل المستخدم وتوفر تجربة فريدة في السوق الإماراتية.",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"],
      "image": "https://www.codevay.com/assets/img/luxe-bzns-logo.png",
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
        "url": "https://www.codevay.com/expert-web-development-dubai",
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
      "priceRange": "$$$",
      "telephone": "+971 562 455 466",
      "aggregateRating": {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "Service",
          "name": "تصميم وتطوير مواقع الكترونية"
        },
        "ratingValue": "5.0",
        "reviewCount": "8120"
      }
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
      } else {
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', window.location.href);
        this.renderer.appendChild(this.document.head, link);
      }
  
      // Update specific meta tags for the website design page
      this.titleService.setTitle("تصميم مواقع الكترونية في دبي | Codevay");

this.metaTagService.updateTag({
  name: 'description',
  content: 'استكشف تصميم مواقع الكترونية مبتكرة في دبي مع Codevay. نقدم حلول ويب تفاعلية تعزز تجربة المستخدم وتساهم في نجاح عملك.'
});

this.metaTagService.updateTag({
  name: 'keywords',
  content: 'تصميم مواقع, تصميم مواقع دبي, تطوير ويب دبي, تصميم مواقع الكترونية, Codevay'
});

this.metaTagService.updateTag({
  name: 'twitter:description',
  content: 'اكتشف خدمات تصميم المواقع الإلكترونية المبتكرة من Codevay في دبي، التي تعزز من تجربة المستخدم وتفاعله.'
});

this.metaTagService.updateTag({
  name: 'twitter:title',
  content: 'تصميم مواقع الكترونية في دبي | Codevay'
});

this.metaTagService.updateTag({
  name: 'twitter:card',
  content: 'summary_large_image'
});

this.metaTagService.updateTag({
  property: 'og:url',
  content: window.location.href
});

this.metaTagService.updateTag({
  property: 'og:title',
  content: 'تصميم مواقع الكترونية في دبي | Codevay'
});

this.metaTagService.updateTag({
  property: 'og:description',
  content: 'اكتشف خدمات تصميم وتطوير المواقع الإلكترونية المبتكرة من Codevay في دبي، وكيف يمكن لتلك الحلول تعزيز تجربة المستخدم.'
});

this.metaTagService.updateTag({
  property: 'og:type',
  content: 'website'
});

    }
  }

}

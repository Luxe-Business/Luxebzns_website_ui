import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ar-app-design',
  standalone: true,
  imports: [ComponentsModule,NgOptimizedImage,RouterLink,TranslateModule],
  templateUrl: './ar-app-design.component.html',
  styleUrl: './ar-app-design.component.scss'
})
export class ArabicAppDesignComponent implements OnInit{

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
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "serviceType": "Web Design",
      "name": "افضل شركة تصميم وبرمجة تطبيقات في الامارات CodeVay",
      "description": "تصميم تطبيقات الاندرويد والايفون الاحترافية في دبي وعموم الامارات. تقدم Codevay خدمات تصميم تطبيقات جوال تركز على الابتكار، التصاميم الجذابة والمتجاوبة التي تعزز تفاعل المستخدم وتوفر تجربة فريدة في السوق الإماراتية.",
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
        "url": "https://www.codevay.com/تطوير-تطبيقات-الجوال",
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
          "name": "تصميم وتطوير تطبيقات الجوال"
        },
        "ratingValue": "5.0",
        "reviewCount": "38120"
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
      }
  
      // Update specific meta tags for the website design page
      this.titleService.setTitle("تصميم وبرمجة تطبيقات الجوال في دبي | CodeVay");

this.metaTagService.updateTag({
  name: 'description',
  content: 'استكشف تصميم تطبيقات الجوال المبتكرة في دبي مع Codevay. نقدم حلول تطبيقات تفاعلية تعزز تجربة المستخدم وتساهم في نجاح عملك.'
});

this.metaTagService.updateTag({
  name: 'keywords',
  content: 'تصميم تطبيقات, تصميم تطبيق في دبي, تطوير تطبيق دبي, تصميم تطبيقات الكترونية, افضل شركة برمجة تطبيقات، Codevay'
});

this.metaTagService.updateTag({
  name: 'twitter:description',
  content: 'اكتشف خدمات تصميم  وبرمجة تطبيقات الجوال المبتكرة من Codevay في دبي، التي تعزز من تجربة المستخدم وتفاعله.'
});

this.metaTagService.updateTag({
  name: 'twitter:title',
  content: 'تصميم وبرمجة تطبيقات الجوال في دبي | CodeVay'
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
  content: 'تصميم وبرمجة تطبيقات الجوال في دبي | CodeVay'
});

this.metaTagService.updateTag({
  property: 'og:description',
  content: 'اكتشف خدمات تصميم  وبرمجة تطبيقات الجوال المبتكرة من Codevay في دبي، التي تعزز من تجربة المستخدم وتفاعله.'
});

this.metaTagService.updateTag({
  property: 'og:type',
  content: 'website'
});

    }
  }

}

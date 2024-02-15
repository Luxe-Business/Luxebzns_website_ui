import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ComponentsModule } from '../../../components/components.module';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {


  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    this.updateMetadata();
  }

  updateMetadata() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the FAQ page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the FAQ page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the FAQ page
      this.titleService.setTitle("FAQ - Codevay | Answers to Your Questions");
      this.metaTagService.updateTag({ name: 'description', content: 'Explore frequently asked questions (FAQ) about Codevay services and solutions. Get answers to common questions to enhance your understanding of our offerings.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'FAQ, frequently asked questions, Codevay FAQ, service questions, answers, Codevay solutions' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Explore frequently asked questions (FAQ) about Codevay services and solutions. Get answers to common questions to enhance your understanding of our offerings.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'FAQ - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'FAQ - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Explore frequently asked questions (FAQ) about Codevay services and solutions. Get answers to common questions to enhance your understanding of our offerings.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

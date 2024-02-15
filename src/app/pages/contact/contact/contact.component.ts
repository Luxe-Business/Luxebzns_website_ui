import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import {isPlatformBrowser } from '@angular/common';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{


  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    this.updateMetadata();
  }

  updateMetadata() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the Contact page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the Contact page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the Contact page
      this.titleService.setTitle("Contact Us - Codevay | Get in Touch for Innovative IT Solutions");
      this.metaTagService.updateTag({ name: 'description', content: 'Contact Codevay for innovative IT and software solutions. Reach out to our team to discuss your project or inquire about our services. We are here to assist you.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'Contact Us, get in touch, Codevay, IT solutions, software solutions, project inquiry' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Contact Codevay for innovative IT and software solutions. Reach out to our team to discuss your project or inquire about our services. We are here to assist you.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Contact Us - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Contact Us - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Contact Codevay for innovative IT and software solutions. Reach out to our team to discuss your project or inquire about our services. We are here to assist you.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  

}

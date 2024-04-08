import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForMobileAppsDevelopment();
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
      this.metaTagService.updateTag({ name: 'description', content: 'Codevay offers cutting-edge Website Development, Mobile Apps Development, Tech Consulting, CRM & ERP Solutions, Custom Software, AI Chatbots, and UI/UX Design services tailored for Dubai market.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'website development Dubai, mobile apps development Dubai, tech consulting Dubai, CRM solutions Dubai, ERP solutions Dubai, custom software Dubai, AI chatbot Dubai, UI/UX design Dubai' });
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

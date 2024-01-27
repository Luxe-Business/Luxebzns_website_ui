import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit{

  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}


    ngOnInit() {
      this.titleService.setTitle("Privacy Policy - Luxe Bzns: Protecting Your Data in Dubai");
  
      // Update each meta tag
      this.metaTagService.updateTag({ 
        name: 'description', 
        content: 'Read the Luxe Bzns Privacy Policy to understand how we handle your personal data with care and integrity in Dubai.' 
      });
      this.metaTagService.updateTag({ 
        name: 'keywords', 
        content: 'Privacy Policy, Luxe Bzns, personal data protection, data privacy, user information security, Dubai' 
      });
      this.metaTagService.updateTag({ 
        property: 'og:title', 
        content: 'Privacy Policy - Luxe Bzns: Protecting Your Data in Dubai' 
      });
      this.metaTagService.updateTag({ 
        property: 'og:description', 
        content: 'Luxe Bzns is committed to maintaining the privacy and protection of your personal data. Learn more about our practices and policies in Dubai.' 
      });
  
      if (isPlatformBrowser(this.platformId)) {
        this.metaTagService.updateTag({ 
          property: 'og:url', 
          content: window.location.href 
        });
      }
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
      this.metaTagService.updateTag({ 
        property: 'og:image', 
        content: 'URL_to_your_image' // Replace with the actual image URL
      });
      this.metaTagService.updateTag({ 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      });
      this.metaTagService.updateTag({ 
        name: 'twitter:title', 
        content: 'Privacy Policy - Luxe Bzns: Protecting Your Data in Dubai' 
      });
      this.metaTagService.updateTag({ 
        name: 'twitter:description', 
        content: 'Discover how Luxe Bzns upholds the highest standards of data privacy and security for its clients in Dubai.' 
      });
      this.metaTagService.updateTag({ 
        name: 'twitter:image', 
        content: 'URL_to_your_image' // Replace with the actual image URL
      });
    }
}

import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss']
})
export class TermsOfServiceComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title,
              @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.titleService.setTitle("Terms of Service - Luxe Bzns: Understanding Our Terms in Dubai");

    // Update each meta tag
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Explore the Terms of Service for Luxe Bzns. Understand your rights and responsibilities when using our digital solutions in Dubai.'
    });
    this.metaTagService.updateTag({
      name: 'keywords',
      content: 'Terms of Service, Luxe Bzns, digital solutions, Dubai, user agreement, service terms, legal obligations'
    });
    this.metaTagService.updateTag({
      property: 'og:title',
      content: 'Terms of Service - Luxe Bzns: Understanding Our Terms in Dubai'
    });
    this.metaTagService.updateTag({
      property: 'og:description',
      content: 'Discover the Terms of Service for Luxe Bzns, outlining user responsibilities and rights for our digital solutions in Dubai.'
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
      content: 'Terms of Service - Luxe Bzns: Understanding Our Terms in Dubai'
    });
    this.metaTagService.updateTag({
      name: 'twitter:description',
      content: 'Learn about the legal terms and conditions of using Luxe Bzns’s digital solutions in Dubai.'
    });
    this.metaTagService.updateTag({
      name: 'twitter:image',
      content: 'URL_to_your_image' // Replace with the actual image URL
    });
  }
}

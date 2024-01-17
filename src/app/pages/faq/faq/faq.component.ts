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
    this.titleService.setTitle("Luxe Bzns FAQ: Expert Software & IT Solutions in Dubai | Your Technology Questions Answered");
  

    // Update each meta tag
    this.metaTagService.updateTag({ name: 'description', content: 'Find answers to common questions about Luxe Bzns software and IT solutions in Dubai. Our FAQ provides insights into our services, technology, and business solutions.' });
    this.metaTagService.updateTag({ name: 'keywords', content: 'FAQ, Luxe Bzns, software solutions, IT services, Dubai, technology, business solutions, digital transformation, cloud computing, mobile app development' });
    this.metaTagService.updateTag({ property: 'og:title', content: 'FAQ - Luxe Bzns: Your Software & IT Solutions Expert in Dubai' });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Explore our FAQ to get detailed information on Luxe Bzns software and IT services in Dubai, addressing your questions on technology and business solutions.' });

    if (isPlatformBrowser(this.platformId)) {
    this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
  }
    this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    this.metaTagService.updateTag({ property: 'og:image', content: 'URL_to_your_image' }); // Replace with the actual image URL
    this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaTagService.updateTag({ name: 'twitter:title', content: 'FAQ - Luxe Bzns: Your Software & IT Solutions Expert in Dubai' });
    this.metaTagService.updateTag({ name: 'twitter:description', content: 'Discover answers to all your queries about Luxe Bzns software and IT services in Dubai through our comprehensive FAQ section.' });
    this.metaTagService.updateTag({ name: 'twitter:image', content: 'URL_to_your_image' }); // Replace with the actual image URL
}
  

}

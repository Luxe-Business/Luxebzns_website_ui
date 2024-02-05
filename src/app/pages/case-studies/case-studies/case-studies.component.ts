import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [ComponentsModule, RouterLink,CommonModule],
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements AfterViewInit {

  activeTab: string = 'webApplications';

  constructor(private metaTagService: Meta,private titleService: Title,
  @Inject(PLATFORM_ID) private platformId: Object){}

  
  ngOnInit() {
    this.updateMetadata();
  }


  setActiveTab(tabName: string) {
    this.activeTab = tabName;
    this.muteAllVideos();
  }

  ngAfterViewInit() {
    this.muteAllVideos();
  }

  private muteAllVideos(): void {
    // Use a timeout to ensure DOM has updated with any dynamic content
    if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => video.muted = true);
    }, 0);
  }
}


updateMetadata() {
  if (isPlatformBrowser(this.platformId)) {
    // Get the existing meta tags from the home page
    const existingMetaTags = Array.from(document.getElementsByTagName('meta'));

    // Copy the existing meta tags to the Case Studies page
    for (const tag of existingMetaTags) {
      if (tag.hasAttribute('name')) {
        this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
      } else if (tag.hasAttribute('property')) {
        this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
      }
    }

    // Update canonical link to the Case Studies page
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.href);
    }

    // Update specific meta tags for the Case Studies page
    this.titleService.setTitle("Case Studies - Luxe Bzns | Explore Our Successful Projects");
    this.metaTagService.updateTag({ name: 'description', content: 'Explore Luxe Bzns\'s case studies showcasing our successful projects. Discover how we have helped businesses achieve their goals through innovative IT and software solutions.' });
    this.metaTagService.updateTag({ name: 'keywords', content: 'Case Studies, Luxe Bzns projects, successful projects, IT solutions, software solutions, business goals' });
    this.metaTagService.updateTag({ name: 'twitter:description', content: 'Explore Luxe Bzns\'s case studies showcasing our successful projects. Discover how we have helped businesses achieve their goals through innovative IT and software solutions.' });
    this.metaTagService.updateTag({ name: 'twitter:title', content: 'Case Studies - Luxe Bzns' });
    this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
    this.metaTagService.updateTag({ property: 'og:title', content: 'Case Studies - Luxe Bzns' });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Explore Luxe Bzns\'s case studies showcasing our successful projects. Discover how we have helped businesses achieve their goals through innovative IT and software solutions.' });
    this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
  }
}

}

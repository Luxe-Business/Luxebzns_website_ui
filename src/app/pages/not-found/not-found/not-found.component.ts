import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{

  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    this.titleService.setTitle("404 Not Found - Luxe Bzns | Innovative IT and Software Solutions");
    // Basic Meta Tags
    this.metaTagService.updateTag(
      { name: 'description', content: 'Page not found. Luxe Bzns provides cutting-edge software and IT solutions. Explore our services or contact us for more information.' }
    );
  
    // Open Graph (OG) Meta Tags for social media
    this.metaTagService.updateTag(
      { property: 'og:type', content: 'website' }
    );
    this.metaTagService.updateTag(
      { property: 'og:title', content: '404 Page Not Found - Luxe Bzns' }
    );
    this.metaTagService.updateTag(
      { property: 'og:description', content: 'Page not found. Luxe Bzns is your destination for innovative software and IT solutions. Discover more on our website.' }
    );

    if (isPlatformBrowser(this.platformId)) {
    this.metaTagService.updateTag(
      { property: 'og:url', content: window.location.href }
    );
  }
    this.metaTagService.updateTag(
      { property: 'og:image', content: 'URL_to_an_image_representing_the_content' } // Replace with an actual image URL
    );
  
    // Twitter Card Meta Tags
    this.metaTagService.updateTag(
      { name: 'twitter:card', content: 'summary_large_image' }
    );
    this.metaTagService.updateTag(
      { name: 'twitter:title', content: '404 Page Not Found - Luxe Bzns' }
    );
    this.metaTagService.updateTag(
      { name: 'twitter:description', content: 'Page not found. Luxe Bzns provides cutting-edge software and IT solutions. Discover our innovative solutions on our website.' }
    );
    this.metaTagService.updateTag(
      { name: 'twitter:image', content: 'URL_to_an_image_representing_the_content' } // Replace with an actual image URL
    );
    // Add more tags as needed
  }
  
}

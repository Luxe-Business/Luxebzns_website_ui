import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-chatbots',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './ai-chatbots.component.html',
  styleUrl: './ai-chatbots.component.scss'
})
export class AiChatbotsComponent {


  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForAIAndChatbots();
  }

  updateMetadataForAIAndChatbots() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the AI & Chatbots page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the AI & Chatbots page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the AI & Chatbots page
      this.titleService.setTitle("AI & Chatbot Solutions - Luxe Bzns | Revolutionizing Customer Engagement");
      this.metaTagService.updateTag({ name: 'description', content: 'Elevate your customer service with Luxe Bzns\' AI & chatbot solutions. Our cutting-edge technology provides personalized, efficient customer interactions to enhance your business operations.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'AI solutions Dubai, chatbot development, artificial intelligence, machine learning, customer service automation, Luxe Bzns AI chatbots' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Elevate your customer service with Luxe Bzns\' AI & chatbot solutions. Providing personalized, efficient customer interactions to enhance your operations.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'AI & Chatbot Solutions - Luxe Bzns' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'AI & Chatbot Solutions - Luxe Bzns' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Elevate your customer service with Luxe Bzns\' AI & chatbot solutions. Our cutting-edge technology provides personalized, efficient customer interactions to enhance your business operations.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

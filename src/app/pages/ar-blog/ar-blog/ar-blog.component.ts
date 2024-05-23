import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
declare const window: any;
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface BlogDetail {
  id: number;
  attributes?: {
      Title?: string;
      Content?: any[];
      Excerpt?: string;
      Publish_Date?: string;
      Author?: string;
      createdAt?: string;
      Featured_Image?: {
          data: {
              attributes: {
                  url: string;
                  alternativeText: string;
              }
          }[]
      };
      seo?: {
        metaTitle: string;
        metaDescription: string;
        keywords: string;
        metaRobots: string; 
        structuredData: any; 
        metaViewport: string; 
        canonicalURL: string; 
      };
    };
  }
  


@Component({
  selector: 'app-ar-blog',
  standalone: true,
  imports: [ComponentsModule,NgOptimizedImage,RouterLink,TranslateModule,CommonModule],
  templateUrl: './ar-blog.component.html',
  styleUrl: './ar-blog.component.scss'
})
export class ArabicBlogComponent implements OnInit{

  blog: BlogDetail[] | null = null;
  structuredData: any | null = null; 
  slug: string = '';

  constructor(private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient, private route: ActivatedRoute) {}

    updateCanonicalUrl(): void {
      const canonicalLink = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null; // Adjusted type annotation
      if (canonicalLink) {
        canonicalLink.href = `https://www.codevay.com/blog/${encodeURIComponent(this.slug)}`;
      } else {
        // If no canonical link is found, create a new one
        const link: HTMLLinkElement = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'canonical');
        this.renderer.setAttribute(link, 'href', `https://www.codevay.com/blog/${encodeURIComponent(this.slug)}`);
        this.renderer.appendChild(this.document.head, link);
      }
    }

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug'];
        this.updateCanonicalUrl()
        this.loadBlogDetails();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Get the element that marks the end of the content
    const contentEndElement = document.querySelector('.blog-details-wrap');
    const shareButtons = document.querySelector('.social-share-buttons') as HTMLElement;
  
    if (contentEndElement && shareButtons) {
      // Calculate the position where the content ends
      const contentEndPosition = contentEndElement.getBoundingClientRect().bottom + window.pageYOffset;
      
      // Calculate the window's current bottom position
      const windowBottomPosition = window.pageYOffset + window.innerHeight;
  
      // Logic to show/hide the share buttons
      if (windowBottomPosition >= contentEndPosition && windowBottomPosition <= contentEndPosition + 600) { // 100 pixels grace area below content end
        shareButtons.style.display = 'flex'; // Show buttons when within end of content
      } else {
        shareButtons.style.display = 'none'; // Hide buttons when not near end of content
      }
    }
  }
  

  loadBlogDetails(): void {
    this.http.get<{ data: BlogDetail[] }>(`https://codevaycms-production.up.railway.app/api/blogs?filters[Slug][$eq]=${this.slug}&populate=*`).subscribe({
      next: (response) => {
        this.blog = response.data;
        this.structuredData = response.data[0].attributes?.seo?.structuredData; 
        if (isPlatformBrowser(this.platformId)) {
          this.addStructuredData();
          this.updateMetadataForWebsiteDesign();
        }
      },
      error: (error) => console.error('Error fetching blog detail:', error)
    });
  }


  parseRichTextContent(content: any[] | undefined): string {
    if (!content) {
      return ''; // Return empty string if content is undefined
    }
  
    let html = '';
    content.forEach(block => {
      switch (block.type) {
        case 'paragraph':
          html += `<p>${this.parseTextContent(block.children)}</p>`; // Display paragraph content
          break;
        case 'heading':
          html += `<h${block.level}>${this.parseTextContent(block.children)}</h${block.level}>`; // Display heading content
          break;
        case 'list':
          html += `<${block.format === 'ordered' ? 'ol' : 'ul'}>${this.parseListItems(block.children)}</${block.format === 'ordered' ? 'ol' : 'ul'}>`; // Display list content
          break;
        case 'image':
          html += `<img src="${block.image.url}" alt="${block.image.alternativeText}" class="img-fluid mb-5 rounded-custom shadow">`; // Display image
          break;
        case 'quote':
          html += `<blockquote>${this.parseTextContent(block.children)}</blockquote>`; // Display quote
          break;
        case 'code':
          html += `<code>${this.parseTextContent(block.children)}</code>`; // Display code block
          break;
        default:
          // Handle other block types if needed
          break;
      }
    });
    return html;
  }
  
  parseTextContent(children: any[]): string {
    return children.map(child => {
      switch (child.type) {
        case 'text':
          return child.text; // Return text content
        case 'link':
          // Check if child has children and extract text from it
          const linkText = child.children?.map((c: { text: any; }) => c.text).join('') || '';
          if (linkText && child.url) {
            return `<a href="${child.url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`; // Construct and return a link with extracted text
          } else {
            console.warn('Link object missing text or URL:', child);
            return linkText || ''; // Fallback to text if present, otherwise empty string
          }
        default:
          console.warn('Unhandled content type:', child.type);
          return ''; // Return an empty string if the type is not handled
      }
    }).join('');
  }
  
  
  parseListItems(items: any[]): string {
    return items.map(item => `<li>${this.parseTextContent(item.children)}</li>`).join('');
  }


  addStructuredData(): void {
    if (this.structuredData) {
      let script = this.el.nativeElement.querySelector('script[type="application/ld+json"]');
      if (script) {
        this.renderer.removeChild(this.el.nativeElement, script);
      }
      script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'type', 'application/ld+json');
      script.textContent = JSON.stringify(this.structuredData);
      this.renderer.appendChild(this.el.nativeElement, script);
    }
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

      if (this.blog && this.blog.length > 0) {
        const { metaTitle, metaDescription, keywords } = this.blog[0].attributes?.seo ?? {};
        const blogData = this.blog[0].attributes;
        const imageUrl = blogData?.Featured_Image?.data[0]?.attributes?.url;
        const fullImageUrl = imageUrl ? `https://codevaycms-production.up.railway.app${imageUrl}` : '';

        this.titleService.setTitle(metaTitle ?? '');
        this.metaTagService.updateTag({ name: 'description', content: metaDescription ?? '' });
        this.metaTagService.updateTag({ name: 'keywords', content: keywords ?? '' });
        this.metaTagService.updateTag({ name: 'twitter:description', content: metaDescription ?? '' });
        this.metaTagService.updateTag({ name: 'twitter:title', content: metaTitle ?? '' });
        this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaTagService.updateTag({ name: 'twitter:image', content: fullImageUrl });

        this.metaTagService.updateTag({ property: 'og:url', content: `https://www.codevay.com/blog/${this.slug}` });
        this.metaTagService.updateTag({ property: 'og:title', content: metaTitle ?? '' });
        this.metaTagService.updateTag({ property: 'og:description', content: metaDescription ?? '' });
        this.metaTagService.updateTag({ property: 'og:type', content: 'article' });
        this.metaTagService.updateTag({ property: 'og:image', content: fullImageUrl });
      }
    }
  }

  shareOnFacebook(): void {
    const baseUrl = window.location.origin; 
    const pathName = decodeURIComponent(window.location.pathname); // Decode the pathname to keep it clean
    const fullUrl = `${baseUrl}${pathName}`; // Reconstruct the full URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
    window.open(facebookUrl, '_blank');
  }
  
  shareOnTwitter(): void {
    const baseUrl = window.location.origin;
    const pathName = decodeURIComponent(window.location.pathname);
    const text = encodeURIComponent("Discover why Codevay is leading in innovation with this insightful article!");
    const fullUrl = `${baseUrl}${pathName}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${text}`;
    window.open(twitterUrl, '_blank');
  }
  
  shareOnLinkedIn(): void {
    const baseUrl = window.location.origin;
    const pathName = encodeURIComponent(window.location.pathname); // Encode the pathname
    const fullUrl = `${baseUrl}${pathName}`;
    const title = encodeURIComponent("Explore Codevay's Latest Innovations in Our Newest Article!");
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${fullUrl}&title=${title}`; // Use encoded URL and title
    window.open(linkedInUrl, '_blank');
}
  

}

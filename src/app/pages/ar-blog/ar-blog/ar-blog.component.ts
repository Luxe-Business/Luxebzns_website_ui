import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug'];
        this.loadBlogDetails();
        this.updateMetadataForWebsiteDesign();
        if (isPlatformBrowser(this.platformId)) {
          this.addStructuredData();
        }
  }


  loadBlogDetails(): void {
    this.http.get<{ data: BlogDetail[] }>(`https://codevaycms-production.up.railway.app/api/blogs?filters[Slug][$eq]=${this.slug}&populate=*`).subscribe({
      next: (response) => {
        this.blog = response.data;
        this.structuredData = response.data[0].attributes?.seo?.structuredData; 
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
  return children.map(child => child.text).join('');
}

parseListItems(items: any[]): string {
  return items.map(item => `<li>${this.parseTextContent(item.children)}</li>`).join('');
}


addStructuredData() {
  if (this.structuredData) {
    const script = this.renderer.createElement('script');
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
  
      // Update canonical link to the website design page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }

      if (this.blog) {
        const { metaTitle, metaDescription, keywords, canonicalURL } = this.blog[0].attributes?.seo ?? {};
        console.log('metaTitle',metaTitle);
        
        this.titleService.setTitle(metaTitle ?? '');
        this.metaTagService.updateTag({ name: 'description', content: metaDescription ?? '' });
        this.metaTagService.updateTag({ name: 'keywords', content: keywords ?? '' });
        this.metaTagService.updateTag({ name: 'twitter:description', content: metaDescription ?? '' });
        this.metaTagService.updateTag({ name: 'twitter:title', content: metaTitle ?? '' });
        this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaTagService.updateTag({ property: 'og:url', content: canonicalURL ?? window.location.href });
        this.metaTagService.updateTag({ property: 'og:title', content: metaTitle ?? '' });
        this.metaTagService.updateTag({ property: 'og:description', content: metaDescription ?? '' });
        this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
  
      }
    }
  }

}

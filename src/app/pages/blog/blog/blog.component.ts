import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface Blog {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    Author:string;
    createdAt: string;
    Excerpt: string;
    Featured_Image?: {
      data: {
        attributes: {
          alternativeText: string,
          formats: {
            small: {
              url: string;
            }
          }
        }
      }[]
    }
  };
}

interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ComponentsModule,HttpClientModule,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs: Blog[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private http: HttpClient,
    private metaTagService: Meta,private titleService: Title,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.loadBlogs();

    this.updateMetadataForWebsiteDesign();
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

  loadBlogs(): void {
    this.http.get<BlogResponse>('https://codevaycms-production.up.railway.app/api/blogs?populate=*').subscribe({
      next: (response) => {
        this.blogs = response.data;
        this.currentPage = response.meta.pagination.page;
        this.totalPages = response.meta.pagination.pageCount;
      },
      error: (error) => console.error('Error fetching blogs:', error)
    });
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  goToPreviousPage(): void {
    if (!this.isFirstPage()) {
      this.currentPage--;
      this.loadBlogs();
    }
  }

  goToNextPage(): void {
    if (!this.isLastPage()) {
      this.currentPage++;
      this.loadBlogs();
    }
  }

  addStructuredData() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "serviceType": "Softwares Service",
      "name": "Codevay تصميم مواقع الكترونية",
      "description": "   تصميم مواقع الكترونية احترافية في دبي. تقدم Codevay خدمات تصميم مواقع ويب تركز على الابتكار والتصاميم الجذابة التي تعزز تفاعل المستخدم.",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"],
      "image": "https://www.codevay.com/assets/img/luxe-bzns-logo.png",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Codevay",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Masraf Building - Baniyas Rd - Deira - Al Rigga",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "83163",
          "addressCountry": "AE"
        },
        "telephone": "+971 562 455 466",
        "url": "https://www.codevay.com/blogs",
        "logo": "https://www.codevay.com/assets/img/luxe-bzns-logo.png",
        "sameAs": [
          "https://www.facebook.com/codevayweb/",
          "https://www.instagram.com/codevay_web/",
          "https://www.linkedin.com/company/codevay/"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Masraf Building - Baniyas Rd - Deira - Al Rigga",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "83163",
        "addressCountry": "AE"
      },
      "priceRange": "$$$",
      "telephone": "+971 562 455 466",
      "aggregateRating": {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "Service",
          "name": "تصميم وتطوير برمجيات"
        },
        "ratingValue": "5.0",
        "reviewCount": "6120"
      }
    });
    this.renderer.appendChild(this.el.nativeElement, script);
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
  
      // Update specific meta tags for the website design page
      this.titleService.setTitle("أحدث مقالات التكنولوجيا والبرمجة | Codevay");
      this.metaTagService.updateTag({ name: 'description', content: 'استكشف أحدث التقنيات وتوجهات البرمجة من خلال مدونتنا المتخصصة. تعرف على كيفية تحسين مواقع الإنترنت وتطبيقات الويب لتعزيز تجربة المستخدم في دبي والعالم العربي.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'تكنولوجيا, برمجة, تصميم ويب, تحسين مواقع, تطوير تطبيقات, Codevay, دبي' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'اكتشف أحدث توجهات التكنولوجيا والبرمجة في دبي مع مدونة Codevay. نقدم لك الحلول المبتكرة لتحسين مواقعك الإلكترونية وتطبيقاتك الويب.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'أحدث مقالات التكنولوجيا والبرمجة | Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'أحدث مقالات التكنولوجيا والبرمجة | Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'اكتشف أحدث توجهات التكنولوجيا والبرمجة في دبي مع مدونة Codevay. نقدم لك الحلول المبتكرة لتحسين مواقعك الإلكترونية وتطبيقاتك الويب.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'article' });
    }
  }

}

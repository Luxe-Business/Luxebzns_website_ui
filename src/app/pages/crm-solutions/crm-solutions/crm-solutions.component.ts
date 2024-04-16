import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crm-solutions',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './crm-solutions.component.html',
  styleUrl: './crm-solutions.component.scss'
})
export class CrmSolutionsComponent {


  constructor(private metaTagService: Meta,private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetadataForCRMAndERPSolutions();
  }

  updateMetadataForCRMAndERPSolutions() {
    if (isPlatformBrowser(this.platformId)) {
      // Get the existing meta tags from the home page
      const existingMetaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Copy the existing meta tags to the CRM & ERP solutions page
      for (const tag of existingMetaTags) {
        if (tag.hasAttribute('name')) {
          this.metaTagService.updateTag({ name: tag.getAttribute('name') ?? '', content: tag.getAttribute('content') ?? '' });
        } else if (tag.hasAttribute('property')) {
          this.metaTagService.updateTag({ property: tag.getAttribute('property') ?? '', content: tag.getAttribute('content') ?? '' });
        }
      }
  
      // Update canonical link to the CRM & ERP solutions page
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', window.location.href);
      }
  
      // Update specific meta tags for the CRM & ERP solutions page
      this.titleService.setTitle("Advanced CRM & ERP Solutions - Codevay | Transforming Business Processes");
      this.metaTagService.updateTag({ name: 'description', content: 'Empower your business with Codevay\' advanced CRM & ERP solutions. Streamline operations, enhance client relationships, and drive efficiency with our tailored software solutions.' });
      this.metaTagService.updateTag({ name: 'keywords', content: 'CRM solutions Dubai, ERP solutions Dubai, business process optimization, custom CRM software, custom ERP software, Codevay CRM ERP' });
      this.metaTagService.updateTag({ name: 'twitter:description', content: 'Empower your business with Codevay\' advanced CRM & ERP solutions. Streamline operations and drive efficiency with our tailored software solutions.' });
      this.metaTagService.updateTag({ name: 'twitter:title', content: 'Advanced CRM & ERP Solutions - Codevay' });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaTagService.updateTag({ property: 'og:url', content: window.location.href });
      this.metaTagService.updateTag({ property: 'og:title', content: 'Advanced CRM & ERP Solutions - Codevay' });
      this.metaTagService.updateTag({ property: 'og:description', content: 'Empower your business with Codevay\' advanced CRM & ERP solutions. Streamline operations and drive efficiency with our tailored software solutions.' });
      this.metaTagService.updateTag({ property: 'og:type', content: 'website' });
    }
  }
  
}

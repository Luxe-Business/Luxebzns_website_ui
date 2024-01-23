import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Client Testimonials - Luxe Bzns: Real Stories of Digital Success in Dubai");

    // Update each meta tag
    this.metaTagService.updateTag({ 
      name: 'description', 
      content: 'Explore real client testimonials and success stories at Luxe Bzns. Discover how we excel in delivering digital solutions in Dubai.' 
    });
    this.metaTagService.updateTag({ 
      name: 'keywords', 
      content: 'Client Testimonials, Luxe Bzns Reviews, Customer Success Stories, Digital Solutions, Dubai IT Services, Software Development Feedback, Dubai Client Reviews' 
    });
    this.metaTagService.updateTag({ 
      property: 'og:title', 
      content: 'Client Testimonials - Luxe Bzns: Real Stories of Digital Success in Dubai' 
    });
    this.metaTagService.updateTag({ 
      property: 'og:description', 
      content: 'Hear from our clients about their experiences and achievements with Luxe Bzns’s digital solutions and services in Dubai.' 
    });
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
      content: 'Client Testimonials - Luxe Bzns: Real Stories of Digital Success in Dubai' 
    });
    this.metaTagService.updateTag({ 
      name: 'twitter:description', 
      content: 'Discover the impact of Luxe Bzns through the words of our satisfied clients in Dubai.' 
    });
    this.metaTagService.updateTag({ 
      name: 'twitter:image', 
      content: 'URL_to_your_image' // Replace with the actual image URL
    });
  }
}

import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { SoftwareDevelopmentComponent } from './pages/software-development/software-development.component';
import { WebsiteDesignComponent } from './pages/website-design/website-design.component';
import { MobileAppDevelopmentComponent } from './pages/mobile-app-development/mobile-app-development.component';
import { AiChatbotsComponent } from './pages/ai-chatbots/ai-chatbots.component';
import { TechConsultingComponent } from './pages/tech-consulting/tech-consulting.component';
import { CrmSolutionsComponent } from './pages/crm-solutions/crm-solutions.component';
import { UiUxDesignServicesComponent } from './pages/ui-ux-design-services/ui-ux-design-services.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'case-studies',
    loadChildren: () => import('./pages/case-studies/case-studies.module').then(m => m.CaseStudiesModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },

  {
    path: 'blog/:id',
    loadChildren: () => import('./pages/blog-detail/blog-detail.module').then(m => m.BlogDetailsModule)
  },

  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./pages/careers/careers.module').then(m => m.CareersModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'terms-of-service',
    loadChildren: () => import('./pages/terms-of-service/terms-of-service.module').then(m => m.TermsOfServiceModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },

  {
    path: 'digital-marketing',
    component: DigitalMarketingComponent,
  },
  {
    path: 'software-development',
    component: SoftwareDevelopmentComponent,
  },
  {
    path: 'website-design',
    component: WebsiteDesignComponent,
  },
  {
    path: 'mobile-app-development',
    component: MobileAppDevelopmentComponent,
  },
  {
    path: 'ai-chatbots',
    component: AiChatbotsComponent,
  },
  {
    path: 'tech-consulting',
    component: TechConsultingComponent,
  },
  {
    path: 'crm-and-erp-solutions',
    component: CrmSolutionsComponent,
  },
  {
    path: 'ui-ux-design-services',
    component: UiUxDesignServicesComponent,
  },
  {
    path: '404', component: NotFoundComponent
  },
  { path: '**', redirectTo: '404' }
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { WebsiteDesignComponent } from './website-design/website-design.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { AiChatbotsComponent } from './ai-chatbots/ai-chatbots.component';
import { TechConsultingComponent } from './tech-consulting/tech-consulting.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

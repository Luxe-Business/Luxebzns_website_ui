import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { ContactFormComponent } from './global/contact-form/contact-form.component';
import { StatisticsComponent } from './global/statistics/statistics.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedLinkDirective } from '../directives/localized-link.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { TrustpilotComponent } from './global/trustpilot/trustpilot.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    StatisticsComponent,
    LocalizedLinkDirective,
    HeaderSectionComponent,
    TrustpilotComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    HttpClientModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    StatisticsComponent,
    HeaderSectionComponent,
    TrustpilotComponent
  ]
})
export class ComponentsModule { }

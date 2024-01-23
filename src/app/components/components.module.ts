import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { ContactFormComponent } from './global/contact-form/contact-form.component';
import { StatisticsComponent } from './global/statistics/statistics.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    StatisticsComponent,
  ]
})
export class ComponentsModule { }

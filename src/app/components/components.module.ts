import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }

import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ComponentsModule,NgOptimizedImage,RouterLink,TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}

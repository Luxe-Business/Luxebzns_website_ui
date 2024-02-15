import { Component, OnDestroy } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ComponentsModule,TranslateModule,NgOptimizedImage,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{

}

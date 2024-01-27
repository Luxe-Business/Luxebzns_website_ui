import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

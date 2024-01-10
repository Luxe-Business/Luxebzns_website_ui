import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}

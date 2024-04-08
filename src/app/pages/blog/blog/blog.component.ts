import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}

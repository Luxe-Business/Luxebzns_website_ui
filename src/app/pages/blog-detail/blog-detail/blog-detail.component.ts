import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

}

import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

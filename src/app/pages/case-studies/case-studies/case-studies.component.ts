import { Component, AfterViewInit } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [ComponentsModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.muteAllVideos();
  }

  private muteAllVideos(): void {
    // Use a timeout to ensure DOM has updated with any dynamic content
    setTimeout(() => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => video.muted = true);
    }, 0);
  }
}

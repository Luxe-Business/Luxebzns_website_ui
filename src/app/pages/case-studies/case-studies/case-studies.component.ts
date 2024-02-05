import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [ComponentsModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngAfterViewInit() {
    this.muteAllVideos();
  }

  private muteAllVideos(): void {
    // Use a timeout to ensure DOM has updated with any dynamic content
    if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => video.muted = true);
    }, 0);
  }
}
}

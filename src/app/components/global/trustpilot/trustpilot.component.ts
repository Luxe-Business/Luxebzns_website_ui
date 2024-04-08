import { Component, OnInit, Renderer2, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-trustpilot',
  standalone: false,
  templateUrl: './trustpilot.component.html',
  styleUrl: './trustpilot.component.scss'
})
export class TrustpilotComponent implements OnInit, OnDestroy{
  private scriptElement!: HTMLScriptElement;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTrustpilotWidget();
    }
  }

  loadTrustpilotWidget(): void {
    this.scriptElement = this.renderer.createElement('script');
    this.scriptElement.type = 'text/javascript';
    this.scriptElement.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    this.scriptElement.defer = true;
    this.renderer.appendChild(document.body, this.scriptElement);
  }

  ngOnDestroy(): void {

      if (isPlatformBrowser(this.platformId) && this.scriptElement) {
        this.renderer.removeChild(document.body, this.scriptElement);
      }
  }

}

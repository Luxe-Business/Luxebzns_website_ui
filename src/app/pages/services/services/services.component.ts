import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';

declare var bootstrap: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor(private router: Router, private elRef: ElementRef) {}

  goToService(service: string) {
    // Manually hide tooltips
    this.hideTooltips();

    // Navigate to the new route
    this.router.navigate([service]);
  }

  private hideTooltips() {
    const tooltips = this.elRef.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltipElement: HTMLElement) => {
      // Check if the tooltip instance exists
      const tooltipInstance = bootstrap.Tooltip.getInstance(tooltipElement);
      if (tooltipInstance) {
        tooltipInstance.hide();
      }
    });
  }
}

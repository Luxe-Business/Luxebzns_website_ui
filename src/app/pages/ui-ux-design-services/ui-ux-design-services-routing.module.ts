import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiUxDesignServicesComponent } from './ui-ux-design-services/ui-ux-design-services.component';

const routes: Routes = [
  {
    path: '',
    component: UiUxDesignServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiUxDesignServicesRoutingModule { }

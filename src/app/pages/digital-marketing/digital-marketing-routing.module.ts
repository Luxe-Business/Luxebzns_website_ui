import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalMarketingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalMarketingRoutingModule { }

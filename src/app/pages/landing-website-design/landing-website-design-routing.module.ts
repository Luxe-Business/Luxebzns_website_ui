import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingWebDesignComponent } from './landing-website-design/landing-website-design.component';

const routes: Routes = [
  {
    path: '',
    component: LandingWebDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingWebDesignRoutingModule { }

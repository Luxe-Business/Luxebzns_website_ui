import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteDesignComponent } from './website-design/website-design.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteDesignComponentRoutingModule { }

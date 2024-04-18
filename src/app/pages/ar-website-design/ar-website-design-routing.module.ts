import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicWebDesignComponent } from './ar-website-design/ar-website-design.component';

const routes: Routes = [
  {
    path: '',
    component: ArabicWebDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArabicWebDesignRoutingModule { }
